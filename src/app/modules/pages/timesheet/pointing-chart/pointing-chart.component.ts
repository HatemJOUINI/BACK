import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Pointing } from 'src/app/core/models/pointing.model';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { RequestHolidayComponent } from 'src/app/modules/modals/usersmanagement-modals/request-holiday/request-holiday.component';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';
import { ListContractRateComponent } from 'src/app/modules/modals/contractsmanagement-modals/list-contract-rate/list-contract-rate.component';
import { ResetPasswordComponent } from 'src/app/modules/modals/usersmanagement-modals/reset-password/reset-password.component';
import { AddTasksComponent } from 'src/app/modules/modals/timesheetmanagement-modals/add-tasks/add-tasks.component';
import { AddOtherTaskComponent } from 'src/app/modules/modals/timesheetmanagement-modals/add-other-task/add-other-task.component';

@Component({
  selector: 'app-pointing-chart',
  templateUrl: './pointing-chart.component.html',
  styleUrls: ['./pointing-chart.component.css']
})
export class PointingChartComponent implements OnInit {

  public source: LocalDataSource;

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) { }

  data = [
    {
      column1: 'Holiday-1',
      column2: '10-10-2021',
      column3: 'Hatem Jouini',
      column4: '',
      column5: '',
      column6: '15-10-2010',
      column7: '7 Jour ',
      column8: 'User-1'
    },
    {
      column1: 'Holiday-2',
      column2: '10-10-2021',
      column3: 'Hatem Jouini',
      column4: '',
      column5: '',
      column6: '15-10-2021',
      column7: '15 Jour ',
      column8: 'User-2'
    }
  ];

  settings = {
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
      column1: {
        title: 'Id',
        type: 'string',
      },
      column2: {
        title: 'Creation Date',
        type: 'string',
      },
      column3: {
        title: 'Created By',
        type: 'string',
      },
      column4: {
        title: 'Update Date',
        type: 'string',
      },
      column5: {
        title: 'updated By',
        type: 'string',
      },
      column6: {
        title: 'Date',
        type: 'string',
      },
      column7: {
        title: 'Duration',
        type: 'string',
      },
      column8: {
        title: 'User Id',
        type: 'string',
      },
      /*
      button: {
        title: 'Details',
        type: 'custom',
        renderComponent: ButtonListContractsRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`);
          });
        }
      },
      */
    },
  };

  ngOnInit() {
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  
  open() {
    this.dialogService.open(AddOtherTaskComponent)
      .onClose.subscribe((data) => {
        if (data) { this.source.prepend(data); }
      }
      );
  }

 
}


