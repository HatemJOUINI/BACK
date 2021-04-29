import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbThemeModule, NbLayoutModule, NbSidebarModule,
  NbCardModule, NbTabsetModule, NbCheckboxModule,
  NbProgressBarModule, NbMenuModule, NbDialogModule,
  NbToastrModule, NbDatepickerModule, NbActionsModule, NbIconModule
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { NavComponent } from './shared/layout/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAuthComponent } from './auth/ngx-auth/ngx-auth.component';
import { NgxLoginComponent } from './auth/ngx-login/ngx-login.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CoreModule } from './core/core.module';

//import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    NavComponent,
    NgxAuthComponent,
    NgxLoginComponent, 

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    //SharedModule,
    HttpClientModule,
    //CoreModule,
    NbSidebarModule,
    NbCardModule,
    NbLayoutModule,
    NbDialogModule.forRoot(),
    NbTabsetModule,
    NbCheckboxModule,
    NbProgressBarModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbIconModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
   /* NbSecurityModule.forRoot({
      accessControl: {
        User: {
          // login
          // home 
          // full access on : task, timesheetElement
          view: ['tasks', 'timesheets', 'releases', 'requirements', 'home', 'login'],
          create: ['tasks', 'timesheets', 'requirements'],
          remove: ['tasks', 'timesheets', 'requirements'],
        },
        TeamLeader: {
          parent: 'User',
          // parent user : task, timesheet
          // full access on : users, teams, releases, requirement
          view: ['users', 'teams', 'releases', 'requirements', 'contracts', 'customers'],
          create: ['users', 'teams', 'releases', 'requirements'],
          remove: ['users', 'teams', 'releases', 'requirements'],
        },
        Admin: {
          // customers, contracts, rates, : Admin
          // full access on : everything
          view: '*',
          create: '*',
          remove: '*',
        },
      },
    }),
    */
    //NbMenuModule,
    NbActionsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
