import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CreateRequirementComponent } from 'src/app/modules/modals/requirement-modals/create-requirement/create-requirement.component';
import { ButtonListTasksRenderComponent } from 'src/app/modules/renderers/button-list-tasks-render.component';
import { RequirementService, Requirement } from 'src/app/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAccessChecker } from '@nebular/security';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CustomServerDataSource } from 'src/app/core/services/serverDataSourceRequirement';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomEditorRequirementStatus } from 'src/app/modules/renderers/custom-editor-requirement-status';
import { CustomEditorRequirementType } from 'src/app/modules/renderers/custom-editor-requirement-type';
import { CustomDateEditor } from 'src/app/modules/renderers/custom-date-editor';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})

export class RequirementComponent implements OnInit {
  public loading = false; //for loading

  requirements: Requirement[] = [];
  user: UserPayload;
  //source: CustomServerDataSource;
  source: LocalDataSource;

  constructor(
    private requirementService: RequirementService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private authService: NbAuthService,
    public accessChecker: NbAccessChecker,
    public http: HttpClient,
    private datePipe: DatePipe, //For Date format
  ) {
   // this.authService.onTokenChange()
     // .subscribe((token: NbAuthJWTToken) => {

       // if (token.isValid()) {
        //  this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
          // this.token = token;
     //   }

      //}
      //);
  }

  settings = {

    pager: {
      display: true,
      perPage: 25
    },
      
    hideSubHeader: false,
    actions: {
      add: true,
      delete: true,
      update: true,
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
      Nom: {
        title: 'Nom',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      /*  editor: {
          type: 'custom',
          component: CustomEditorRequirementType,
        }, */
      },
      status: {
        title: 'Status',
        type: 'string',
        /*editor: {
          type: 'custom',
          component: CustomEditorRequirementStatus,
        }, */
      },
    /*  contractName: {
        title: 'Contract Name',
        type: 'string',
        editable: true,
      }, */
      releaseDescription: {
        title: 'Release',
        type: 'string',
        editable: true,
      },
     /* ParentRequirementId: {
        title: 'Parent Requirement',
        type: 'string',
        editable: false,
      }, */
      StartDate: {
        title: 'Start date',
        type: 'string',
        valuePrepareFunction: (startDate) => {
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'yyyy-MM-dd');
          return formatted;
        },
       /* editor: {
          type: 'custom',
          component: CustomDateEditor,
        }, */
      },
      ClosingDate: {
        title: 'Closing date',
        type: 'string',
        valuePrepareFunction: (closingDate) => {
          var raw = new Date(closingDate);
          var formatted = this.datePipe.transform(raw, 'yyyy-MM-dd');
          return formatted;
        },
         /*editor: {
          type: 'custom',
          component: CustomDateEditor,
        }, */
      },
      /*button: {
        title: 'Details',
        type: 'custom',
        filter: true,
        renderComponent: ButtonListTasksRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`);
          });
        },
        editable: true,
      }, */
    },
  };

 
  ngOnInit() {
    this.reload();
  }

  reload() {
    this.loading = true;
    //this.source = new CustomServerDataSource(this.http);
      this.requirementService.getAll().subscribe((data) => {
        this.source = new LocalDataSource(data);
        this.loading = false;
      }, error => {
        this.loading = false;
        //...
      });

  }

  open() {
    this.dialogService.open(CreateRequirementComponent)
      .onClose.subscribe((data) => {
        if (data) {
          this.source.prepend(data);
          this.reload();
        }
      }
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    var dataToDelete = event.data;
    this.loading = true;
    if (window.confirm('Are you sure you want to delete?')) {
      this.requirementService.destroy(event.data.Id).
        subscribe(data => {

          this.source.prepend(dataToDelete);

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
      this.requirementService.update(event.newData).
        subscribe(data => this.showToast('Requirement updated successfully', 'Success'));
      this.loading = false;
      event.confirm.resolve();
    } else {
      event.confirm.reject();
      this.loading = false;
    }
  }

}
