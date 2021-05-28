import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService, NbCalendarRange, NbDateService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { TimesheetService } from 'src/app/core';
import { NbAccessChecker } from '@nebular/security';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { CustomEditorDurationCommentComponent } from 'src/app/modules/renderers/custom-editor-duration-comment.component';
import { CustomRenderDurationCommentComponent } from 'src/app/modules/renderers/custom-render-duration-comment.component';
import { TimesheetTaskWeek } from 'src/app/core/models/timesheetTaskWeek.models';
import { AddTasksComponent } from 'src/app/modules/modals/timesheetmanagement-modals/add-tasks/add-tasks.component';
import { AddOtherTaskComponent } from 'src/app/modules/modals/timesheetmanagement-modals/add-other-task/add-other-task.component';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { UserTask } from 'src/app/core/models/userTask.model';

@Component({
  selector: 'app-timesheetmanagement',
  templateUrl: './timesheetmanagement.component.html',
  styleUrls: ['./timesheetmanagement.component.css']
})
export class TimesheetmanagementComponent implements OnInit {
  public loading = false; // for loading
  taskToTimesheet: TimesheetTaskWeek;
  tasksInTimesheet: TimesheetTaskWeek[] = [];
  promotedTimesheets: TimesheetTaskWeek[] = [];
  allTasks: UserTask[] = [];
  tab: TimesheetTaskWeek[] = [];
  bool: boolean;

  boolAddAllTasks: boolean;
  ////////////////////////// Calendar ///////////////////////////////////////
  range: NbCalendarRange<Date>;
  boundingMonthValue = false;
  ///////////////////////////////////////////////////////////////////////////
  timesheets: TimesheetTaskWeek[] = [];
  source: LocalDataSource;
  dates: any[];
  newSettings;
  user: UserPayload; // this variable will store the token payload
  timesheetElement: TimesheetTaskWeek; // selected row from table
  comment: string;
  weekDates: any[];
  ////////////////////////// Combo box user /////////////////////////////////
  idE;
  employees = [];
  ///////////////////////////////////////////////////////////////////////////
  constructor(
    private timesheetService: TimesheetService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    private taskService: UserTaskService,
    private employeeService: EmployeeService, // Get All Users For Combo box
    protected dateService: NbDateService<Date>) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

      });
    //////////////////////// Calendar /////////////////////////////////////
    let d = { 'start': new Date() };
    this.handleRangeChange(d);
    ///////////////////////////////////////////////////////////////////////
  }

  // init settings of the table
  settings = {};

  ngOnInit() {
    if (this.user.rol !== 'User') {
      this.employeeService.getAll().subscribe((data) => { // get list of all users for combo box
        this.employees = data;
        this.employees.sort((a, b) => {
          var textA = a.firstName.toUpperCase();
          var textB = b.firstName.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      });
    }
    this.reload();
  }

  reload() {
    if (this.idE == null) {
      this.idE = this.user.id;
    }

    //  getAllValidated by user
    this.taskService.GetAllValidatedByIdUser(this.idE.toString()).subscribe((data) => {
      this.allTasks = data;
    });

    this.loading = true;
    this.bool = true;

    this.timesheetService.GetWeekTsByUser(this.idE.toString(), this.weekDates[0]).subscribe((data) => {
      this.source = new LocalDataSource(data);
      this.tasksInTimesheet = data;
      if (this.promotedTimesheets.length > 0) {
        this.tasksInTimesheet.forEach(element2 => {
          for (let i = 0; i < this.promotedTimesheets.length; i++) {
            if (element2.IsGuard == this.promotedTimesheets[i].IsGuard
              && element2.Billable == this.promotedTimesheets[i].Billable
              && element2.userTaskId == this.promotedTimesheets[i].userTaskId) {
              this.promotedTimesheets.splice(
                this.promotedTimesheets.indexOf(this.promotedTimesheets[i]), 1);
            }
          }
        });
        for (let i = 0; i < this.promotedTimesheets.length; i++) {
          this.source.append(this.promotedTimesheets[i]);
        }
      }

      this.loading = false;
    }, error => {
      this.loading = false;
      // ...
    });

    this.newSettings = {
      sort: true,
      /*pager: {
        display: true,
        perPage: 10
      },*/
      hideSubHeader: false,
      actions: {
        add: false,
        edit: true,
        delete: false
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true,
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns:
      {
        requirementName: {
          title: 'Requirement',
          type: 'string',
          editable: false,
        },
        /*requirementDescription: {
          title: 'Req Description',
          type: 'string',
          editable: false,
        },*/
        taskDescription: {
          title: 'Task',
          type: 'string',
          editable: false,
          sortDirection: 'asc',
        },
        taskType: {
          title: 'Type',
          type: 'string',
          editable: false,
        },
        Billable: {
          title: 'Billable',
          type: 'string',
          editable: false,
          valuePrepareFunction: (value) => {
            return (value.toString() === "true") ? 'Yes' : 'No';
          }
        },
        IsGuard: {
          title: 'Guard',
          type: 'string',
          editable: false,
          valuePrepareFunction: (value) => {
            return (value.toString() === "true") ? 'Yes' : 'No';
          }
        },
        day1: {
          title: 'Lun ' + this.weekDates[0],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day2: {
          title: 'Mar ' + this.weekDates[1],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day3: {
          title: 'Mer ' + this.weekDates[2],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day4: {
          title: 'Jeu ' + this.weekDates[3],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day5: {
          title: 'Ven ' + this.weekDates[4],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day6: {
          title: 'Sam ' + this.weekDates[5],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
        day7: {
          title: 'Dim ' + this.weekDates[6],
          type: 'custom',
          renderComponent: CustomRenderDurationCommentComponent,
          editor: {
            type: 'custom',
            component: CustomEditorDurationCommentComponent,
          },
        },
      }
    };
    this.settings = Object.assign({}, this.newSettings);
  }

  showToastSuccess(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  showToastDanger(status, message) {
    this.toastrService.danger(status, message, { status, });
  }

  // add, update and delete methods
  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      event.newData.userId = this.idE;
      if (event.newData.taskType == "Night Fees") {
        event.newData.duration = 1;
      }

      this.timesheetService.update(event.newData)
        .subscribe(data => {                                              // Double on add Fix
          for (let i = 0; i < this.promotedTimesheets.length; i++) {
            if (event.newData.IsGuard == this.promotedTimesheets[i].IsGuard
              && event.newData.Billable == this.promotedTimesheets[i].Billable
              && event.newData.userTaskId == this.promotedTimesheets[i].userTaskId) {
              this.promotedTimesheets.splice(
                this.promotedTimesheets.indexOf(this.promotedTimesheets[i]), 1);
            }
          }
          this.showToastSuccess('Operation done successfully', 'Success');
          event.confirm.resolve();
          this.reload();
          this.reload();
        }
        );

    } else {
      event.confirm.reject();
    }
  }

  rowClicked(event) { // select row from table
    this.timesheetElement = event.data;
  }

  ///////////////////////// Calendar ///////////////////////////////
  handleRangeChange(date) {
    const Wday: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = date.start;
    const TodayDay = Wday[day.getDay()];
    switch (TodayDay) {

      case 'Monday': {
        this.range = {
          start: this.dateService.addDay(date.start, 0),
          end: this.dateService.addDay(date.start, 6),
        };
        break;
      }
      case 'Tuesday': {
        this.range = {
          start: this.dateService.addDay(date.start, -1),
          end: this.dateService.addDay(date.start, 5),
        };
        break;
      }

      case 'Wednesday': {
        this.range = {
          start: this.dateService.addDay(date.start, -2),
          end: this.dateService.addDay(date.start, 4),
        };
        break;
      }
      case 'Thursday': {
        this.range = {
          start: this.dateService.addDay(date.start, -3),
          end: this.dateService.addDay(date.start, 3),
        };
        break;
      }
      case 'Friday': {
        this.range = {
          start: this.dateService.addDay(date.start, -4),
          end: this.dateService.addDay(date.start, 2),
        };
        break;
      }
      case 'Saturday': {
        this.range = {
          start: this.dateService.addDay(date.start, -5),
          end: this.dateService.addDay(date.start, 1),
        };
        break;
      }
      case 'Sunday': {
        this.range = {
          start: this.dateService.addDay(date.start, -6),
          end: this.dateService.addDay(date.start, 0),
        };
        break;
      }
    }

    const SelectedWeek: string[] = [];
    for (let i = 0; i < 7; i++) {
      const theday = this.dateService.addDay(this.range.start, i);
      const dd = this.dateService.getDate(theday);
      const mm = this.dateService.getMonth(theday) + 1; // January start = 0
      const yy = this.dateService.getYear(theday);
      // format souhaitÃ©e
      SelectedWeek.push(yy + '-' + mm + '-' + dd);
    }
    this.weekDates = SelectedWeek;
    this.reload();
  }
  //////////////////////////////////////////////////////////////////

  openAddTasks() {
    this.dialogService.open(AddTasksComponent, {
      context: {
        startWeek: this.weekDates[0],
        idE: this.idE,
        promotedTimesheets: this.promotedTimesheets,
      }
    })
      .onClose.subscribe((data) => {

        if (data) {
          for (let j = 0; j < data.length; j++) {
            for (let i = 0; i < this.promotedTimesheets.length; i++) {
              if (data[j].IsGuard == this.promotedTimesheets[i].IsGuard
                && data[j].Billable == this.promotedTimesheets[i].Billable
                && data[j].userTaskId == this.promotedTimesheets[i].userTaskId) {
                this.showToastDanger('danger', 'Selected task/Tasks already exists');
                data.splice(
                  data.indexOf(data[j]), 1);
              }
            }
          }
        };

        if (data) {
          data.forEach(element => {
            this.source.append(element);
            this.promotedTimesheets.push(element);
            this.showToastSuccess('Success', 'Task/Tasks Added successfully');
          });
        }

      });
  }

  openAddOtherTasks() {
    this.dialogService.open(AddOtherTaskComponent, {
      context: {
        startWeek: this.weekDates[0],
        idE: this.idE,
      }
    })
      .onClose.subscribe((data) => {

        if (data) {
          for (let j = 0; j < data.length; j++) {
            for (let i = 0; i < this.promotedTimesheets.length; i++) {
              if (data[j].IsGuard == this.promotedTimesheets[i].IsGuard
                && data[j].Billable == this.promotedTimesheets[i].Billable
                && data[j].userTaskId == this.promotedTimesheets[i].userTaskId) {
                this.showToastDanger('danger', 'Selected task/Tasks already exists');
                data.splice(
                  data.indexOf(data[j]), 1);
              }
            }
          }
        };

        if (data) {
          data.forEach(element => {
            this.source.append(element);
            this.promotedTimesheets.push(element);
            this.showToastSuccess('Success', 'Task/Tasks Added successfully');
          });
        }

      });
  }

  addAllTasks() {
    this.bool = true;
    this.loading = true;
    if (this.tasksInTimesheet.length == 0) {
      if (this.allTasks.length > 0) {
        this.allTasks.forEach(element => {
          this.taskToTimesheet = {
            id: null,
            requirementName: element.requirementNom,
            taskType: element.Type,
            userTaskId: element.id,
            taskDescription: element.Description,
            weekStartDate: this.weekDates[0],
            IsGuard: false,
            Billable: true,
            day1: 'null',
            day2: 'null',
            day3: 'null',
            day4: 'null',
            day5: 'null',
            day6: 'null',
            day7: 'null',
            userId: this.idE,
          };
          this.source.prepend(this.taskToTimesheet);
          this.promotedTimesheets.push(this.taskToTimesheet);
        });
      }
    } else {
      if (this.allTasks.length > 0) {
        this.allTasks.forEach(element1 => {
          this.bool = true;
          this.tasksInTimesheet.forEach(element2 => {
            if (element1.id === element2.userTaskId
              && element2.IsGuard === false
              && element2.Billable === true) {
              this.bool = false;
            }
          });
          if (this.bool === true) {
            this.taskToTimesheet = {
              id: null,
              requirementName: element1.requirementNom,
              taskType: element1.Type,
              userTaskId: element1.id,
              taskDescription: element1.Description,
              weekStartDate: this.weekDates[0],
              IsGuard: false,
              Billable: true,
              day1: 'null',
              day2: 'null',
              day3: 'null',
              day4: 'null',
              day5: 'null',
              day6: 'null',
              day7: 'null',
              userId: this.idE,
            };
            this.source.prepend(this.taskToTimesheet); // source here
            this.promotedTimesheets.push(this.taskToTimesheet);
          } else {
            this.showToastDanger('danger', element1.Description + ' already exists');
          }
        });
      }
    }
    this.loading = false;
  }

}
