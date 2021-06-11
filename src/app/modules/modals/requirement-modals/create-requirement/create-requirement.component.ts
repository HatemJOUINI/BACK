import { Component, OnInit, Type } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { RequirementService, ContractService } from 'src/app/core/services';
import { Contract, Requirement } from 'src/app/core/models';
import { ReleaseService } from 'src/app/core/services/release.service';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.css']
})
export class CreateRequirementComponent implements OnInit {

  TypeSelectHasError=true;
  StatusselectHasError = true;
  ReleaseselectHasError = true;
  PRequirementselectHasError = true;
  TypeselectHasError = true;
  ContractselectHasError = true;
  requirementForm: FormGroup;
  submitted = false;
  public contracts = [];
  public requirements = [];
  public releases = [];
  requirement = new Requirement();
  startDateReq = new Date();
  closingDateReq = new Date();
 
  idC;
  Type;
  idP;
  status;
  idR;
  parameter;
  parametertype;
  parameterstype: any[];
  parameters: any[];
  checkoutForm: FormGroup;
  constructor(
    protected ref: NbDialogRef<CreateRequirementComponent>,
    private contractService: ContractService,
    private requirementService: RequirementService,
    private releaseService: ReleaseService,
    private parameterService: ParameterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
   this.requirementForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', this.DateValidator()],
      closingDate: ['', this.DateValidator()],
      Type: ['', Validators.required],
      Contract: ['', Validators.required],
      PRequirement: [],
      Release: [],
      status: ['', Validators.required]
    }); 


    this.contractService.getAll()
      .subscribe(data => this.contracts = data);

    this.requirementService.getAll()
      .subscribe(data => this.requirements = data);

    this.releaseService.getAll()
      .subscribe(data => this.releases = data);
  }
  get f() { return this.requirementForm.controls; }

 
  create() {

    console.log(this.requirementForm.value)
  
    if(this.startDateReq>this.closingDateReq){
  window.alert("Start date must be equal or inferior to end date");return;}
  //  this.submitted = true;
    this.requirement.StartDate = this.startDateReq.toDateString();
    this.requirement.ClosingDate = this.closingDateReq.toDateString();


   this.requirementService.create(this.requirement).
      subscribe(requirement => {
        this.ref.close(requirement);
      });
  } 


  dismiss() {
    this.ref.close();
  }


  DateValidator(format = "dd/MM/YYYY"): any {
    return (control: FormControl): { [key: string]: any } => {
      const val = moment(control.value, format, true);
      if (!val.isValid()) {
        return { invalidDate: true };
      }
      return null;
    };
  }

  

 

}
