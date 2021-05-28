import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { UserTask } from 'src/app/core/models/userTask.model';
import { TimesheetTaskWeek } from 'src/app/core/models/timesheetTaskWeek.models';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbDialogService, NbToastrService, NbDialogRef } from '@nebular/theme';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { TimesheetService } from 'src/app/core';

@Component({
  selector: 'app-add-other-task',
  templateUrl: './add-other-task.component.html',
  styleUrls: ['./add-other-task.component.css']
})
export class AddOtherTaskComponent implements OnInit {
  @Input() startWeek: string;
  @Input() idE;
  idx; // index for splice

  source: LocalDataSource;

  sourceTimesheet: LocalDataSource;

  user: UserPayload; // this variable will store the token payload

  tasksToTimesheet: UserTask[]; // list of selected tasks to add to timesheet

  tasksInTimesheet: TimesheetTaskWeek[];

  timesheetElement: TimesheetTaskWeek; // selected row from table

  bool: boolean;

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
      isGuard: {
        title: 'Is Guard',
        editor: {
          type: 'list',
          config: {
            selectText: ' ',
            list: [
              { value: 'true', title: 'Yes' },
              { value: 'false', title: 'No' },
            ],
          },
        },
        defaultValue: 'false',
        valuePrepareFunction: (value) => {
          return (value.toString() === 'true') ? 'Yes' : 'No';
        },
      },
      billable: {
        title: 'Is Billable',
        editor: {
          type: 'list',
          config: {
            selectText: ' ',
            list: [
              { value: 'true', title: 'Yes' },
              { value: 'false', title: 'No' },
            ],
          },
        },
        defaultValue: 'false',
        valuePrepareFunction: (value) => {
          return (value.toString() === 'true') ? 'Yes' : 'No';
        },
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

    //init list
    this.tasksToTimesheet = [];

    //getAllValidated by user
    //Where type=""
    this.taskService.GetAllOtherTasks(this.idE.toString()).subscribe((data) => {
      data.forEach(element => {
      element.Billable = "true"; element.IsGuard = "false";
      });
      this.source = new LocalDataSource(data);
    });

    //getAllTsByUser
    this.timesheetService.GetWeekTsByUser(this.idE.toString(), this.startWeek).subscribe((data) => {
      this.sourceTimesheet = new LocalDataSource(data);
      this.tasksInTimesheet = data;
    });
  }

  add() {
    //compare between tasks in sourceTimesheet and tasksToTimesheet
    //Ajouter les tasks qui sont différent(task,isguard,billable) à source Timesheet;

    if (this.tasksInTimesheet.length == 0) {//if timesheet element is empty
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
        this.tasksInTimesheet.forEach(element2 => {
          if (element1.id == element2.userTaskId
            && (element1.IsGuard == "true") == element2.IsGuard
            && (element1.Billable == "true") == element2.Billable) {
            this.bool = false;
          }
        });
        if (this.bool == true) {
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
          //console.log("it exists already.");
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
