import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { Release } from 'src/app/core/models/release.model';
import { ReleaseService } from 'src/app/core/services/release.service';
import { LocalDataSource } from 'ng2-smart-table';
import { CreateReleaseComponent } from 'src/app/modules/modals/releasemanagement-modals/create-release/create-release.component';
import { NbAccessChecker } from '@nebular/security';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { DatePipe } from '@angular/common';
import { CustomDateEditor } from 'src/app/modules/renderers/custom-date-editor';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';

@Component({
  selector: 'app-releasemanagement',
  templateUrl: './releasemanagement.component.html',
  styleUrls: ['./releasemanagement.component.css']
})
export class ReleasemanagementComponent implements OnInit {
  public loading = false; //for loading
  public releases: Release[] = [];
  public source: LocalDataSource;
  public user: UserPayload;
  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private releaseService: ReleaseService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    private datePipe: DatePipe, //For Date format
  ) {}//{
   // this.authService.onTokenChange()
     // .subscribe((token: NbAuthJWTToken) => {
       // if (token.isValid()) {
         // this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
          // this.token = token;
      //  }
      //});
 // }

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
      Description: {
        title: 'Description',
        type: 'string',
      },
      StartDate: {
        title: 'Start Date',
        type: 'string',
        valuePrepareFunction: (startDate) => {
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'yyyy-MM-dd');
          return formatted; 
       },  
        editor: {
          type: 'custom',
          component: CustomDateEditor,
        },
      },
      ReleaseDate: {
        title: 'Release Date',
        type: 'string',
        valuePrepareFunction: (releaseDate) => {
          var raw = new Date(releaseDate);
          var formatted = this.datePipe.transform(raw, 'yyyy-MM-dd');
          return formatted;  
        },  
        editor: {
          type: 'custom',
          component: CustomDateEditor,
        },
      },
    },
  };

 

  ngOnInit() {

   // if (this.user.rol == "User") {
    //  this.settings = this.settingsUser;
    //}
    //else {
     // this.settings = this.settingsAdminTL;
    //}
    this.refresh(); 
  }

  open() {
    this.dialogService.open(CreateReleaseComponent)
      .onClose.subscribe((data) => {
        if (data) { this.source.prepend(data); }
      });
  }
  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    console.log(event);
    var dataToDelete = event.data;
    this.loading = true;
    if (window.confirm('Are you sure you want to delete?')) {
      this.releaseService.destroy(event.data.Id).
        subscribe(data => {
          if(data==-2){
            this.source.prepend(dataToDelete);
            this.dialogService.open(DeleteErrorComponent)
          }
          else if(data==0){
            this.showToast('Release deleted successfully', 'Success')
          }else{
            this.showToast('Unknown deletion error', 'Success')
          }
        });
      this.loading = false;
      event.confirm.resolve();
    } else {
      this.loading = false;
      event.confirm.reject();
    }
  }


  
  onEditConfirm(event): void {
    console.log(event);
    this.loading = true;
    if (window.confirm('Are you sure you want to update?')) {
      this.releaseService.update(event.newData).
        subscribe(Data => this.showToast('Release updated successfully', 'Success'));
      this.loading = false;
      event.confirm.resolve();
    } else {
      this.loading = false;
      event.confirm.reject();
    }
  }
 refresh() {
    this.loading = true;
    this.releaseService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
      this.loading = false;
    }, error => {
      this.loading = false;
      //...
    });
  }

}
