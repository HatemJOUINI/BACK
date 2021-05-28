import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbDialogService, NbToastrService, NbDialogRef } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { UserTask } from 'src/app/core/models/userTask.model';
import { TimesheetTaskWeek } from 'src/app/core/models/timesheetTaskWeek.models';
import { TimesheetService } from 'src/app/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  @Input() idE;
  @Input() startWeek: string;
  @Input() promotedTimesheets: TimesheetTaskWeek[] = [];

  idx; // index for splice

  source: LocalDataSource;

  sourceTimesheet: LocalDataSource;

  user: UserPayload; // this variable will store the token payload

  tasksToTimesheet: UserTask[]; // list of selected tasks to add to timesheet

  tasksInTimesheet: TimesheetTaskWeek[];

  timesheetElement: TimesheetTaskWeek; // selected row from table

  bool: boolean;

  bool2: boolean;

  tasksInTimesheetToAdd: TimesheetTaskWeek;
  tasksInTimesheetToAddArr: TimesheetTaskWeek[] = [];
  settings = {
    selectMode: 'multi',
    pager: {
      display: true,
      perPage: 5
    },
    hideSubHeader: false,
    actions: {
      add: false,
      edit: true,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      requirementNom: {
        title: 'Requirement',
        type: 'string',
        editable: false,
      },
      requirementDescription: {
        title: 'Req Description',
        type: 'string',
        editable: false,
      },
      description: {
        title: 'Task',
        type: 'string',
        editable: false,
      },
      Billable: {
        title: 'Billable',
        editor: {
          type: 'list',
          config: {
            selectText: ' ',
            list: [
              { value: 'true', title: 'True' },
              { value: 'false', title: 'False' },
            ],
          },
        },
        defaultValue: 'false',
        valuePrepareFunction: (value) => {
          return (value.toString() === "true") ? 'Yes' : 'No';
        }
      },
      IsGuard: {
        title: 'Guard',
        editor: {
          type: 'list',
          config: {
            selectText: ' ',
            list: [
              { value: 'true', title: 'True' },
              { value: 'false', title: 'False' },
            ],
          },
        },
        defaultValue: 'false',
        valuePrepareFunction: (value) => {
          return (value.toString() === "true") ? 'Yes' : 'No';
        }
      },
    }
  }

  constructor(
    private taskService: UserTaskService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<AddTasksComponent>,
    private authService: NbAuthService,
    private timesheetService: TimesheetService,
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

      });

  }

  ngOnInit() {

    //init bool
    this.bool = true;
    this.bool2 = true;
    //init list
    this.tasksToTimesheet = [];

    //getAllValidated by user
    this.taskService.GetAllValidatedByIdUser(this.idE).subscribe((data) => {
      data.forEach(element => {
        element.Billable = "true"; element.IsGuard = "false";
      });
      this.source = new LocalDataSource(data);
    });

    //getAllTsByUser
    this.timesheetService.GetWeekTsByUser(this.idE, this.startWeek).subscribe((data) => {
      this.sourceTimesheet = new LocalDataSource(data);
      this.tasksInTimesheet = data;
    });
  }

  add() {
    //compare between tasks in sourceTimesheet and tasksToTimesheet
    //Ajouter les tasks qui sont différent(task,IsGuard,Billable) à source Timesheet;
    if (this.tasksInTimesheet.length == 0 && this.promotedTimesheets.length == 0) {//if timesheet element is empty
      if (this.tasksToTimesheet.length != 0) {
        this.tasksToTimesheet.forEach(value => {
          // 1/1 ADD IN SMART TABLE
          this.tasksInTimesheetToAdd = {
            id: null,
            requirementName: value.requirementNom,
            taskType: value.Type,
            userTaskId: value.id,
            taskDescription: value.Description,
            weekStartDate: this.startWeek,
            IsGuard: <boolean><unknown>value.IsGuard,
            Billable: <boolean><unknown>value.Billable,
            day1: "null",
            day2: "null",
            day3: "null",
            day4: "null",
            day5: "null",
            day6: "null",
            day7: "null",
            userId: this.idE,
          };
          this.tasksInTimesheetToAddArr.push(this.tasksInTimesheetToAdd);
        });
        this.ref.close(this.tasksInTimesheetToAddArr);
      }
    } else {
      this.tasksToTimesheet.forEach(element1 => {
        this.bool = true;
        this.bool2 = true;

        this.tasksInTimesheet.forEach(element2 => {
          if (element1.id == element2.userTaskId
            && (element1.IsGuard == "true") == element2.IsGuard
            && (element1.Billable == "true") == element2.Billable) {
            this.bool = false;
          }
        });

        this.promotedTimesheets.forEach(element2 => {
          if (element1.id == element2.userTaskId
            && (element1.IsGuard == "true") == element2.IsGuard
            && (element1.Billable == "true") == element2.Billable) {
            this.bool2 = false;
          }
        });

        if (this.bool == true && this.bool2 == true) {
          // 1/2 ADD IN SMART TABLE
          this.tasksInTimesheetToAdd = {
            id: null,
            requirementName: element1.requirementNom,
            taskType: element1.Type,
            userTaskId: element1.id,
            taskDescription: element1.Description,
            weekStartDate: this.startWeek,
            IsGuard: <boolean><unknown>element1.IsGuard,
            Billable: <boolean><unknown>element1.Billable,
            day1: "null",
            day2: "null",
            day3: "null",
            day4: "null",
            day5: "null",
            day6: "null",
            day7: "null",
            userId: this.idE,
          };
          this.tasksInTimesheetToAddArr.push(this.tasksInTimesheetToAdd);
        }
        else {
          this.showToast('danger', 'Task/Tasks already exists');
        }
      });
      this.ref.close(this.tasksInTimesheetToAddArr);
    }
  }

  dismiss() {
    this.ref.close();
  }

  rowClicked(event) {
    if (!this.tasksToTimesheet.includes(event.data)) {
      this.tasksToTimesheet.push(event.data); // add it into the list
    } else {
      if (this.tasksToTimesheet.includes(event.data)) {
        this.idx = this.tasksToTimesheet.indexOf(event.data);
        this.tasksToTimesheet.splice(this.idx, 1);
      }
    }
  }

  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }

}
