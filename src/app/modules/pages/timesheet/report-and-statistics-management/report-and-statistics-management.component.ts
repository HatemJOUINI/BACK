import { Component, OnInit } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer.model';
import { ContractService, Contract, TimesheetService } from 'src/app/core';
import { MonthlyTsByContract } from 'src/app/core/models/monthlyTsByContract.model';
///////////////////// generate pdf ///////////////////////
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
//////////////////////////////////////////////////////////
@Component({
  selector: 'app-report-and-statistics-management',
  templateUrl: './report-and-statistics-management.component.html',
  styleUrls: ['./report-and-statistics-management.component.css']
})
export class ReportAndStatisticsManagementComponent implements OnInit {
  

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie'; 

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  ngOnInit() {
  }
}

