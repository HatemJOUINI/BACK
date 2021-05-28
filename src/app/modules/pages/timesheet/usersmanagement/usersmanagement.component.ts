import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CreateUserComponent } from 'src/app/modules/modals/usersmanagement-modals/create-user/create-user.component';
import { RequestHolidayComponent } from 'src/app/modules/modals/usersmanagement-modals/request-holiday/request-holiday.component';
import { LocalDataSource } from 'ng2-smart-table';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';
import { ButtonListContractsUserRenderComponent } from 'src/app/modules/renderers/ButtonListContractsUserRenderComponent';
import { ButtonAddContractRenderComponent } from 'src/app/modules/renderers/ButtonAddContractRenderComponent';
import { NbAccessChecker } from '@nebular/security';
import { ButtonResetPasswordRenderComponent } from 'src/app/modules/renderers/button-reset-password-render-component';
import { DatePipe } from '@angular/common';
import { CustomEditorUserRoleComponent } from 'src/app/modules/renderers/CustomEditorUserRoleComponent';
import { CustomEditorCivilStatus } from 'src/app/modules/renderers/custom-editor-civilstatus';
import { CustomDateEditor } from 'src/app/modules/renderers/custom-date-editor';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';

@Component({
  selector: 'app-usersmanagement',
  templateUrl: './usersmanagement.component.html',
  styleUrls: ['./usersmanagement.component.css']
})
export class UsersmanagementComponent implements OnInit {
  public loading = false; //for loading
  public employees: Employee[] = [];
  public source: LocalDataSource;
  constructor(
    private employeeService: EmployeeService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private datePipe: DatePipe, //For Date format
  ) { }

  settings = {
    pager: {
      display: true,
      perPage: 10
  },
    hideSubHeader: false,
    actions: {
      add: true,
      edit: true,
      delete: true
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
    /*Id: {
        title: 'Id',
        type: 'string',
      }, */
      FirstName: {
        title: 'First Name',
        type: 'string',
      },
      LastName: {
        title: 'Last Name',
        type: 'string', 
      },
     /* Birthday: {
        title: 'Birthday',
        type: 'string',
        valuePrepareFunction: (birthday) => {
          var raw = new Date(birthday);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
        editor: {
          type: 'custom',
          component: CustomDateEditor,
        }, 
      }, */
      Adress: {
        title: 'Adress',
        type: 'string',
      },
    CIN: {
        title: 'Cin',
        type: 'string',
      },
    City: {
        title: 'City',
        type: 'string',
      },
      Function: {
        title: 'Function',
        type: 'string',
      },
      PhoneNumber: {
        title: 'Phone Number',
        type: 'string',
      },
      CivilStatus: {
        title: 'Civil Status',
        type: 'string',
        editor:{
          type: 'custom',
          component: CustomEditorCivilStatus,
        }
      },
      StartDate: {
        title: 'Start Date',
        type: 'string',
        valuePrepareFunction: (startDate) => {
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
        editor: {
          type: 'custom',
          component: CustomDateEditor,
        },
      },
      Email: {
        title: 'Email',
        type: 'string',
      },
      Role: {
        title: 'Role',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomEditorUserRoleComponent,
        }, 
      },
     
     
    },
  };

  ngOnInit() {

    this.reload();
   /* this.loading = true;
    this.employeeService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
      this.loading = false;
    }, error => {
      this.loading = false;
      //...
    }); */
  }

  reload() {
    this.loading = true;
    //this.source = new CustomServerDataSource(this.http);
      this.employeeService.getAll().subscribe((data) => {
        this.source = new LocalDataSource(data);
        this.loading = false;
      }, error => {
        this.loading = false;
        //...
      }); 
    }

  open() {
    this.dialogService.open(CreateUserComponent)
      .onClose.subscribe((data) => {
        if (data) { this.source.prepend(data); }
      }
      );
  }

 /* open2() {
    this.dialogService.open(RequestHolidayComponent);
  } */

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    var dataToDelete = event.data;
    this.loading = true;
    if (window.confirm('Are you sure you want to delete?')) {
      this.employeeService.destroy(event.data.Id).
        subscribe(data => {
          this.source.prepend(dataToDelete)
        });
      this.loading = false;
      event.confirm.resolve();
    } else {
      this.loading = false;
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.loading = true;
    if (window.confirm('Are you sure you want to update?')) {
      this.employeeService.update(event.newData).
        subscribe(data => this.showToast('User updated successfully', 'Success'));
      this.loading = false;
      event.confirm.resolve();
    } else {
      this.loading = false;
      event.confirm.reject();
    }
  }

}
