import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { RequirementService, Requirement } from 'src/app/core';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbDialogRef } from '@nebular/theme';
import { Employee } from 'src/app/core/models/employee.model';
import { UserTask } from 'src/app/core/models/userTask.model';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";

@Component({
  selector: 'app-create-task-in-list-task',
  templateUrl: './create-task-in-list-task.component.html',
  styleUrls: ['./create-task-in-list-task.component.css']
})
export class CreateTaskInListTaskComponent implements OnInit {
  submitted = false;
  taskForm: FormGroup;
  TypeSelectHasError = true;
  RequirementSelectHasError = true;
  EmployeesSelectHasError = true;
  StatusSelectHasError = true;

  //if we create task from requirement view
  @Input() requirement: Requirement;

  task = new UserTask();
  closingDateT = new Date();

  requirements = [];
  req: Requirement;
  idR; //id of selected requirement
  idEmp; //id of employee

  sourceReq: LocalDataSource; // source requirements
  sourceEmp: Employee[] = []; //Liste of All Employees
  //combo box of employees
  parameters: any[];
  parameter;

  typeList: any[]; //select option of task type
  type;

  user: UserPayload; // this variable will store the token payload
  hideUsersCombo: boolean;//to hide/show div containing list of users

  constructor(protected ref: NbDialogRef<CreateTaskInListTaskComponent>,
    private taskService: UserTaskService,
    private requirementService: RequirementService,
    private employeeService: EmployeeService,
    private authService: NbAuthService,
    private parameterService: ParameterService,
    private formBuilder: FormBuilder) {

    this.hideUsersCombo = true; // div containing list of users hidden by default

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

        if (this.user.rol != 'User') {
          this.hideUsersCombo = false;
        }

      });
  }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required],
    estimateWorkLoad: [/*'',[Validators.required,Validators.min(0)]*/],
      toFinalise: [/*'',[Validators.required,Validators.min(0)]*/],
      closingDate: ['', this.DateValidator()],
      employees: [],
      Requirement: [],
      status: [],
      Type: [],
    })

   // if (this.user.rol != 'User')
     {
      this.employeeService.getAll().subscribe(data => this.sourceEmp = data);
      }

    this.parameterService.getByGroup("RequirementsStatus")
      .subscribe(data => this.parameters = data);

    this.parameterService.getByGroup("UserTasksType")
      .subscribe(data => this.typeList = data);

    this.requirementService.getAll().subscribe((data) => {
      this.sourceReq = new LocalDataSource(data);
    });
    
    this.requirements.push(this.requirement); // put the selected requirement into requirements
    this.idR = this.requirement.id;
  }
  get f() { return this.taskForm.controls; }

  create() {
    this.submitted = true;
    if (this.taskForm.invalid) {
      return;
    }
    
    this.task.RequirementId = this.idR;

    this.task.Status = this.parameter;

    this.task.Type = this.type;

    this.task.ClosingDate = this.closingDateT.toDateString();

    if (this.user.rol == 'User') {
      this.task.IsValidated = 'False';
      this.task.userId = this.user.id;
    } else {
      this.task.IsValidated = 'True';
      this.task.userId = this.idEmp; //got from combo box
    }

    this.taskService.create(this.task).
      subscribe(task => {
        this.ref.close(task);
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
  StatusValidateSelect(value) {
    if (!value) {
      this.StatusSelectHasError = true;
    } else {
      this.StatusSelectHasError = false;
    }
  }

  TypeValidateSelect(value) {
    if (!value) {
      this.TypeSelectHasError = true;
    } else {
      this.TypeSelectHasError = false;
    }
  }

  EmployeesValidateSelect(value) {
    if (!value) {
      this.EmployeesSelectHasError = true;
    } else {
      this.EmployeesSelectHasError = false;
    }
  }


}
