import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Contract, ContractService } from 'src/app/core';
import { identifierModuleUrl } from '@angular/compiler';
import { ContractRate } from 'src/app/core/models/contractrate.model';
import { Guid } from 'guid-typescript';
import { Rate } from 'src/app/core/models/rate.model';
import { LocalDataSource } from 'ng2-smart-table';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  Role:any;
  civilStatu:any;
  civilStatuss: any[];
  Roles: any[];
  contractSelectHasError=true;
  errors;
  CivilselectHasError=true;
  birthdayU = new Date();
  startDateU = new Date();
  submitted = false;
  affected = false;
  selectHasError=true;
  userForm: FormGroup;
  contractForm: FormGroup;
  employee = new Employee();
  contracts: any[];
  employees: any[];
  toAddContracts: ContractRate[] = [];
  toAddRates = [];
  idcontract: Contract;
  Rate;
  birthday;
  startDate;
  ContractNames = [];
  contractrate;
  source: LocalDataSource;
  constructor(
    protected ref: NbDialogRef<CreateUserComponent>,
    private toastrService: NbToastrService,
    private employeeService: EmployeeService,
    private contractService: ContractService,
    private formBuilder:FormBuilder,
    private parameterService: ParameterService,
  ) { }
  settings = {
    hideSubHeader: true,
    actions: {
      add: true,
      edit: true,
      delete: true
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
      name: {
        title: 'Contract name',
        type: 'string',
        filter: true
      },
      rate: {
        title: 'Value',
        type: 'string',
        filter: true
      },
    },
  }
  

  ngOnInit() {
    this.userForm= this.formBuilder.group({
      userName:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      firstName:['',Validators.required],
      registrationNumber:['',Validators.required],
      phoneNumber:['',Validators.required],
      function:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      city:['',Validators.required],
      adress:['',Validators.required],
      cin:['',Validators.required],
      lastname:['',Validators.required],
      birthday:['',this.DateValidator()],
      startDate:['',this.DateValidator()],
      civilStatus:['',Validators.required],
      Role:['',Validators.required]
    });
    this.contractForm=this.formBuilder.group({
      rate:['',[Validators.required,Validators.min(0)]],
      contract:[]
    })
    this.contractService.getAll()
      .subscribe(data => this.contracts = data);
      this.parameterService.getByGroup("CivilStatus")
      .subscribe(data => this.civilStatuss = data);
      this.parameterService.getByGroup("UserRoles")
      .subscribe(data => this.Roles = data);
     }
     



  addContract() {
    this.affected = true;
    if (this.contractForm.invalid) {
      return;
  }
    var c = this.contracts.find(c => c.id == this.idcontract);

    this.contractrate = new ContractRate();

    this.contractrate.id = <Guid>this.idcontract;
    this.contractrate.rate = this.Rate;
    this.contractrate.name = c.name;

    this.toAddContracts.push(this.contractrate);
    this.source = new LocalDataSource(this.toAddContracts);
    console.log(this.toAddContracts);
  }
  

  create() {
     this.submitted = true;
  this.employee.Birthday=this.birthdayU.toDateString();
  this.employee.StartDate=this.startDateU.toDateString();
  this.employee.CivilStatus=this.civilStatu;
  this.employee.Role=this.Role;
    this.employee.contractrate = this.toAddContracts;
    
    this.employeeService.create(this.employee).
      subscribe(Employee => {
        this.showToast('Account created successfully', 'Success')
        this.ref.close(Employee);
      }
      //,error =>{this.errors=error;alert("The user name "+this.employee.userName+" is already taken.")});
      );}
      
  get f() { return this.userForm.controls; }
  get ff() { return this.contractForm.controls; }
  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  dismiss() {
    this.ref.close();
  }
  onDeleteConfirm(event): void {
    let pos = this.toAddContracts.map(function (e) { return e.id; }).indexOf(event.data.id);
    if (pos !== -1) {
      this.toAddContracts.splice(pos, 1);
    }
    event.confirm.resolve();
    console.log(this.toAddContracts);
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
