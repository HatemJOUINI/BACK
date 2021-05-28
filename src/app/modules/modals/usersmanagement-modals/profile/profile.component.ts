import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { Employee } from 'src/app/core/models/employee.model';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { PasswordChange } from 'src/app/core/models/passwordChange.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ParameterService } from 'src/app/core/services/parameter.service';
import * as moment from "moment";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  constructor( ){}
  

  ngOnInit() {
    
  
}}
