import { Component, Input, OnInit } from '@angular/core';
import { ViewCell, DefaultEditor } from 'ng2-smart-table';
import { ParameterService } from 'src/app/core/services/parameter.service';

@Component({
    template: `
  <select name="status"
    [(ngModel)]="statu" (click)="$event.preventDefault()" (change)="onChange($event.target.value)">
    <option Selected value={{statu.value}} *ngFor="let statu of status" >
        {{statu.value}}
    </option>
  </select>
  `,
})

export class CustomEditorContractStatus extends DefaultEditor implements OnInit {

    status: any;
    statu: any;

    constructor(private parameterService: ParameterService) {
        super()
    }

    ngOnInit() {
        this.parameterService.getByGroup("ContractsStatus")
            .subscribe(data => this.status = data);
    }
    onChange(deviceValue) {
        this.cell.newValue = deviceValue;
    }
}
