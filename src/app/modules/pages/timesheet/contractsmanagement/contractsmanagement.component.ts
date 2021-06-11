import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CreateContractComponent } from 'src/app/modules/modals/contractsmanagement-modals/create-contract/create-contract.component';
import { ContractService, Contract } from 'src/app/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbAccessChecker } from '@nebular/security';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { DatePipe } from '@angular/common';
import { CustomEditorContractStatus } from 'src/app/modules/renderers/custom-editor-contract-status';
import { CustomDateEditor } from 'src/app/modules/renderers/custom-date-editor';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';

@Component({
  selector: 'app-contractsmanagement',
  templateUrl: './contractsmanagement.component.html',
  styleUrls: ['./contractsmanagement.component.css']
})

export class ContractsmanagementComponent implements OnInit {
  public loading = false; //for loading
  contracts: Contract[] = [];
  source: LocalDataSource;
  user: UserPayload;
  constructor(
    private contractService: ContractService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    private datePipe: DatePipe, //For Date format
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
          // this.token = token;
        }

      });
  }

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
      Name: {
        title: 'Name',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
      CustomerId_FK: {
        title: 'Customer Name',
        type: 'string',
        editable: true,
      },
      StartDate: {
        title: 'Start Date',
        type: 'string',
        valuePrepareFunction: (startDate) => {
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      /*  editor: {
          type: 'custom',
          component: CustomDateEditor,
        }, */
      },
      EndDate: {
        title: 'End Date',
        type: 'string',
        valuePrepareFunction: (endDate) => {
          var raw = new Date(endDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
        /*editor: {
          type: 'custom',
          component: CustomDateEditor,
        },*/
      },
      Status: {
        title: 'Status',
        type: 'string',
       /* editor:{
          type: 'custom',
          component: CustomEditorContractStatus,
        } */
      },
      CoefBase: {
        title: 'Coeff Base',
        type: 'string',
      },
      CoeffSaturday: {
        title: 'Coeff Saturday',
        type: 'string',
      },
      CoeffSunday: {
        title: 'Coeff Sunday',
        type: 'string',
      },
      CoeffOutOfBusinessWeek: {
        title: 'Coeff Out Of Business Week',
        type: 'string',
      
      }, 
    },
  
  };



  ngOnInit() {
    this.reload();
  }

  reload() {
    this.loading = true;
 //   if (this.user.rol == "TeamLeader") {
     // this.settings = this.settingsTL;
  //  }
  //  else {
     // this.settings = this.settingsAdmin;
  //  }
    this.contractService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
      this.loading = false;
    }, error => {
      this.loading = false;
      //...
    });
  }

  open() {
    this.dialogService.open(CreateContractComponent)
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

  /*onDeleteConfirm(event): void {
    var dataToDelete = event.data;
    this.loading = true;
    if (window.confirm('Are you sure you want to delete?')) {
      this.contractService.destroy(event.data.Id).
        subscribe(data => {
          if(data==-2){
            this.source.prepend(dataToDelete);
            this.dialogService.open(DeleteErrorComponent)
          }
          else if(data==0){
            this.showToast('Contract deleted successfully', 'Success')
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
*/

onDeleteConfirm(event): void {
  console.log(event);
  var dataToDelete = event.data;
  this.loading = true;
  if (window.confirm('Are you sure you want to delete?')) {
    this.contractService.destroy(event.data.Id).
      subscribe(data => this.showToast('Contract Deleted successfully', 'Success'));
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
      this.contractService.update(event.newData).
        subscribe(data => this.showToast('Contract updated successfully', 'Success'));
        this.loading = false;
      event.confirm.resolve();
    } else {
      console.log(event);
      this.loading = false;
      event.confirm.reject();
    }
  }

}
