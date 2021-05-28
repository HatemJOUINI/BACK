import { Component, Input, OnInit } from '@angular/core';
import { ViewCell, DefaultEditor } from 'ng2-smart-table';
import { ParameterService } from 'src/app/core/services/parameter.service';

@Component({
    template: `
    <input  (blur)="onChange($event.target.value)" [nbDatepicker]="DatePicker" class="form-control" [(ngModel)]="Date" name="Date">
    <nb-datepicker #DatePicker format="MM/dd/yyyy"></nb-datepicker>
  `,
})

export class CustomDateEditor extends DefaultEditor implements OnInit {

    Date: any;

    constructor() {
        super()
    }

    ngOnInit() {
    }
    onChange(deviceValue) {
        this.cell.newValue = deviceValue;
    }
}
