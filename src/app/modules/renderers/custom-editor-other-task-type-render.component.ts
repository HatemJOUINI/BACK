import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { ParameterService } from 'src/app/core/services/parameter.service';

@Component({
  template: `
  <select name="types"
    [(ngModel)]="type" (click)="$event.preventDefault()" (change)="onChange($event.target.value)">
    <option Selected value={{type.value}} *ngFor="let type of types" >
        {{type.value}}
    </option>
  </select>
  `,
})

export class CustomEditorOtherTaskType extends DefaultEditor implements OnInit {

  types: any;
  type: any;

  constructor(private parameterService: ParameterService) {
    super()
  }

  ngOnInit() {
    this.parameterService.getByGroup("HRTasksType")
      .subscribe(data => this.types = data);
  }

  onChange(deviceValue) {
    this.cell.newValue = deviceValue;
  }

}
