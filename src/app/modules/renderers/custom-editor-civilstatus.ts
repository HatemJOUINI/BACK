import { Component, Input, OnInit } from '@angular/core';
import { ViewCell, DefaultEditor } from 'ng2-smart-table';
import { ParameterService } from 'src/app/core/services/parameter.service';

@Component({
    template: `
  <select name="civilstatus"
    [(ngModel)]="civilstatu" (click)="$event.preventDefault()" (change)="onChange($event.target.value)">
    <option Selected value={{civilstatu.value}} *ngFor="let civilstatu of civilstatus" >
        {{civilstatu.value}}
    </option>
  </select>
  `,
})

export class CustomEditorCivilStatus extends DefaultEditor implements OnInit {

    civilstatus: any;
    civilstatu: any;

    constructor(private parameterService: ParameterService) {
        super()
    }

    ngOnInit() {
        this.parameterService.getByGroup("CivilStatus")
            .subscribe(data => this.civilstatus = data);
    }
    onChange(deviceValue) {
        this.cell.newValue = deviceValue;
    }
}
