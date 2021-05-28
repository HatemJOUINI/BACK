import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequirementComponent } from './requirement/requirement.component';
import { CustomersmanagementComponent } from './customersmanagement/customersmanagement.component';
import { TimesheetmanagementComponent } from './timesheetmanagement/timesheetmanagement.component';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';
import { TeamsmanagementComponent } from './teamsmanagement/teamsmanagement.component';
import { HolidaymanagementComponent } from './holidaymanagement/holidaymanagement.component';
import { ContractsmanagementComponent } from './contractsmanagement/contractsmanagement.component';
import { ReleasemanagementComponent } from './releasemanagement/releasemanagement.component';
import { ReportAndStatisticsManagementComponent } from './report-and-statistics-management/report-and-statistics-management.component';
const routes: Routes = [
  { path: 'pages/requirement', component: RequirementComponent },
  { path: 'pages/customersmanagement', component: CustomersmanagementComponent },
  { path: 'pages/usersmanagement', component: UsersmanagementComponent },
  { path: 'pages/teamsmanagement', component: TeamsmanagementComponent },
  { path: 'pages/timesheetmanagement', component: TimesheetmanagementComponent },
  { path: 'pages/holidaymanagement', component: HolidaymanagementComponent },
  { path: 'pages/contractmanagement', component: ContractsmanagementComponent },
  { path: 'pages/release', component: ReleasemanagementComponent },
  { path: 'pages/statreports', component: ReportAndStatisticsManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetRoutingModule { }
