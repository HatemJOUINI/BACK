import { Component, Input, OnInit } from '@angular/core';
import { ViewCell, DefaultEditor } from 'ng2-smart-table';
import { ParameterService } from 'src/app/core/services/parameter.service';

@Component({
  template: `
  <select name="Role"
    [(ngModel)]="Role" (click)="$event.preventDefault()" (change)="onChange($event.target.value)">
    <option Selected value={{Role.value}} *ngFor="let Role of Roles" >
        {{Role.value}}
    </option>
  </select>
  `,
})

export class CustomEditorUserRoleComponent extends DefaultEditor implements OnInit  {

  Roles:any;
  Role:any;
  

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private parameterService:ParameterService) {
      super()
  }

  ngOnInit() {
    this.parameterService.getByGroup("UserRoles")
    .subscribe(data => this.Roles = data);
  }
  onChange(deviceValue) {
    this.cell.newValue=deviceValue;
}


}
