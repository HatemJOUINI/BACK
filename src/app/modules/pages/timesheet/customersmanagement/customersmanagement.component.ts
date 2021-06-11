import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { CreateCustomerComponent } from 'src/app/modules/modals/customersmanagement-modals/create-customer/create-customer.component';
import { ButtonListContractsRenderComponent } from 'src/app/modules/renderers/button-list-contracts-render.component';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer.model';
import { LocalDataSource } from 'ng2-smart-table';
import { NbAccessChecker } from '@nebular/security';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';

@Component({
  selector: 'app-customersmanagement',
  templateUrl: './customersmanagement.component.html',
  styleUrls: ['./customersmanagement.component.css']
})
export class CustomersmanagementComponent implements OnInit {
  public loading = false; //for loading
  customers: Customer[] = [];
  source: LocalDataSource;
  user: UserPayload;

  constructor(
    private customerService: CustomerService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService) {
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
      Adress: {
        title: 'Address',
        type: 'string',
      },
      PhoneNumber: {
        title: 'Phone number',
        type: 'string',
      },
      Mail: {
        title: 'Mail',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
    /*  button: {
        title: 'Contracts',
        type: 'custom',
        filter: true,
      /*  editable: true,
        renderComponent: ButtonListContractsRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.Id} saved!`);
          }); 
        }  */
      },
   // },
  };

 
ngOnInit() {
  this.loading = true;
  this.customerService.getAll().subscribe((data) => {
    this.source = new LocalDataSource(data);
    this.loading = false;
  }, error => {
    this.loading = false;
    //...
  });
}

open() {
  this.dialogService.open(CreateCustomerComponent)
    .onClose.subscribe((data) => {
      if (data) { this.source.prepend(data); }
    }
    );
}

showToast(status, message) {
  this.toastrService.success(status, message, { status, });
}

onDeleteConfirm(event): void {
  console.log(event);
  var dataToDelete = event.data;
  this.loading = true;
  if (window.confirm('Are you sure you want to delete?')) {
    this.customerService.destroy(event.data.Id).
      subscribe(data => this.showToast('Customer Deleted successfully', 'Success'));
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
      this.customerService.update(event.newData).
        subscribe(data => this.showToast('Customer updated successfully', 'Success'));
      this.loading = false;
      event.confirm.resolve();
    } else {
      this.loading = false;
      event.confirm.reject();
    }
  }

}
