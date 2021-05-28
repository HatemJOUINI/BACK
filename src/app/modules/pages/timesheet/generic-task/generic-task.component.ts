import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbAccessChecker } from '@nebular/security';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';
import { CreateOtherTaskComponent } from 'src/app/modules/modals/taskmanagement-modals/create-other-task/create-other-task.component';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';
import { CustomEditorOtherTaskType } from 'src/app/modules/renderers/custom-editor-other-task-type-render.component';

@Component({
  selector: 'app-generic-task',
  templateUrl: './generic-task.component.html',
  styleUrls: ['./generic-task.component.css']
})

export class GenericTaskComponent implements OnInit {

  public loading = true; //for loading

  source: LocalDataSource;
  //source1: CustomServerDataSource;
  user: UserPayload; // this variable will store the token payload

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
      description: {
        title: 'Description',
        type: 'string',
      },
      requirementNom: {
        title: 'Requirement Name',
        type: 'string',
        editable: false,
      },
      type: {
        title: 'Type',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomEditorOtherTaskType,
        },
      },
      isValidated: {
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
      },
    },
  };

  constructor(
    private taskService: UserTaskService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    public http: HttpClient,
  ) {
   /* this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // *** from the token and assigne it to our `user` variable
        }
        // ****this.source1 = new CustomServerDataSource(this.http, this.user.id);
      }); */
  }

  ngOnInit() {
    this.reload();
  }

  showToastSuccess(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  reload() {
    this.loading = true;
    this.taskService.GetAllOtherTasks(this.user.id.toString()).subscribe((data) => {
      this.source = new LocalDataSource(data);
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  open() {
    this.dialogService.open(CreateOtherTaskComponent)
      .onClose.subscribe((data) => {
        if (data) {
          this.source.prepend(data);
          this.showToastSuccess('Success', 'Task created successfully');
        }
        this.reload();
      }
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    var dataToDelete = event.data;
    if (window.confirm('Are you sure you want to delete?')) {
      this.loading = true;
      this.taskService.destroy(event.data.Id).
        subscribe(data => {
          if (data == -2) {
            this.source.prepend(dataToDelete);
            this.dialogService.open(DeleteErrorComponent)
          }
          else if (data == 0) {
            this.showToast('Task deleted successfully', 'Success')
          } else {
            this.showToast('Unknown deletion error', 'Success')
          }
        });
      this.loading = false;
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

}
