import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateContractComponent } from '../create-contract/create-contract.component';
import { NbToastrService, NbDialogService, NbDialogRef } from '@nebular/theme';
import { ContractService, Contract } from 'src/app/core';
import { Customer } from 'src/app/core/models/customer.model';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { DatePipe } from '@angular/common';
import { CustomEditorContractStatus } from 'src/app/modules/renderers/custom-editor-contract-status';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [];
  @Input() customer: Customer;
  user: UserPayload;

  constructor(
    private contractService: ContractService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<ListContractComponent>,
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
    actions: false,
    columns: {
      Name: {
        title: 'Name',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
      StartDate: {
        title: 'Start Date',
        type: 'string',
        valuePrepareFunction: (startDate) => { 
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      EndDate: {
        title: 'End Date',
        type: 'string',
        valuePrepareFunction: (endDate) => { 
          var raw = new Date(endDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      Status: {
        title: 'Status',
        type: 'string',
      },
      CoeffSunday: {
        title: 'Coeff Sunday',
        type: 'string',
      },
      CoefBase: {
        title: 'Coeff Base',
        type: 'string',
      },
      
      CoeffOutOfBusinessWeek: {
        title: 'Coeff Out Of Business Week',
        type: 'string',
      },
      CoeffSaturday: {
        title: 'Coeff Saturday',
        type: 'string',
      },
    },
  };

  ngOnInit() {
  //  if (this.user.rol == "TeamLeader") {
    //  this.settings = this.settingsTL;
   // }
   // else {
     // this.settings = this.settingsAdmin;
    //}
    this.contractService.getContractsByCustomerId(this.customer.id.toString()).subscribe((data) => {
      this.contracts = data;
    });
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.contractService.destroy(event.data.Id).
        subscribe(data => this.showToast('Contract deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.contractService.update(event.newData).
        subscribe(data => this.showToast('Contract updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  dismiss() {
    this.ref.close();
  }

}
