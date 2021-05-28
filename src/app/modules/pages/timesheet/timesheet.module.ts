import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { NbCardModule, NbDialogModule, NbDialogService,
    NbButtonModule, NbInputModule, NbSelectModule,
    NbToastrService, NbDatepickerModule, NbActionsModule,
    NbProgressBarModule, NbCalendarModule, NbContextMenuModule,
    NbTabsetModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    TimesheetRoutingModule,
    NbCardModule,
    NbDialogModule.forChild(),
    Ng2SmartTableModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbActionsModule,
    NbProgressBarModule,
    NbCalendarModule,
    NbContextMenuModule,
    NbTabsetModule, // for cards
    FormsModule,
  ],
  declarations: [
  ],
  providers: [
    NbDialogService, NbToastrService
  ],
  entryComponents: [
  ]
})

export class TimesheetModule { }
