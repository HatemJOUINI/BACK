import { Component, OnInit } from '@angular/core';
import { CreateTaskComponent } from 'src/app/modules/modals/taskmanagement-modals/create-task/create-task.component';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { UserTask } from 'src/app/core/models/userTask.model';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbAccessChecker } from '@nebular/security';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { ValidateTasksComponent } from 'src/app/modules/modals/taskmanagement-modals/validate-tasks/validate-tasks.component';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { DatePipe } from '@angular/common';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomEditorTaskType } from 'src/app/modules/renderers/custom-editor-task-type';
import { CustomEditorTaskStatus } from 'src/app/modules/renderers/custom-editor-task-status';
import { CustomDateEditor } from 'src/app/modules/renderers/custom-date-editor';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent implements OnInit {
  public loading = false; //for loading

  l: Array<{ value: string, title: string }> = []

  typeList; //select option of task type

  typeListUpdate = [];

  tasks: UserTask[] = [];

  source: LocalDataSource;
  //source1: CustomServerDataSource;
  user: UserPayload; // this variable will store the token payload

  ////////////////////////// Combo box user /////////////////////////////////
  idE;
  employees = [];
  ///////////////////////////////////////////////////////////////////////////
  settings = {
    pager: {
      display: true,
      perPage: 10
  },

    hideSubHeader: false,
    actions: {
      add: true,
      delete: true,
      update: true
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
    columns: {
      Description: {
        title: 'Description',
        type: 'string',
      },
      requirementNom: {
        title: 'Requirement Name',
        type: 'string',
        editable: true,
      },
      Type: {
        title: 'Type',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomEditorTaskType,
        },
      },
      Status: {
        title: 'Status',
        type: 'html',
       /* editor: {
          type: 'custom',
          component: CustomEditorTaskStatus,
        }, */
      },
      ClosingDate: {
        title: 'Closing Date',
        type: 'string',
        valuePrepareFunction: (closingDate) => {
          var raw = new Date(closingDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      /*  editor: {
          type: 'custom',
          component: CustomDateEditor,
        }, */
      },
      EstimateWorkLoad: {
        title: 'Estimated WorkLoad',
        type: 'string',
      },
      tofinalise: {
        title: 'To Finalise',
        type: 'string',
      },
     /* isValidated: {
        title: 'Is validated',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'true', title: 'true' },
              { value: 'false', title: 'false' },
            ],
          }, 
        },
      }, */
    },
  };

  constructor(
    private taskService: UserTaskService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    private parameterService: ParameterService,
    private datePipe: DatePipe, //For Date format
    private employeeService: EmployeeService, //Get All Users For Combo box
    public http: HttpClient,
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }
        //this.source1 = new CustomServerDataSource(this.http, this.user.id);
      });
  }

  ngOnInit() {
    this.idE=this.user.id;
   // this.reload();
  }

 /* reload() {
    this.loading = true;
    if (this.user.rol != "User") {
      this.employeeService.getAll().subscribe((data) => { //get list of all users for combo box
        this.employees = data;
        this.employees.sort((a,b)=>{
          var textA = a.firstName.toUpperCase();
          var textB = b.firstName.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      });
      this.settings = this.settingsAdminTL;
    }
    else { this.settings = this.settingsUser; }
      //this.source1 = new CustomServerDataSource(this.http, this.idE);
      this.taskService.getById(this.idE).subscribe((data) => {
        this.source = new LocalDataSource(data);
        this.loading = false;
      }, error => {
        this.loading = false;
        //...
      });
    
  }
*/
  open() {
    this.dialogService.open(CreateTaskComponent, {context: { employeeId : this.idE }})
      .onClose.subscribe((data) => {
        if (data) {
          this.source.prepend(data);
        }
      //  this.reload();
      }
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    var dataToDelete = event.data;
    if (window.confirm('Are you sure you want to delete?')) {
      this.taskService.destroy(dataToDelete.Id).
      subscribe(data => this.showToast('Task Deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.loading = true;
      this.taskService.update(event.newData).
        subscribe(data => {
          this.loading = false;
          this.showToast('Task updated successfully', 'Success');
          event.confirm.resolve();
        }
        );
    } else {
      event.confirm.reject();
      this.loading = false;
    }
  }

  openValidateTasks() {
    this.dialogService.open(ValidateTasksComponent);
  }

}
