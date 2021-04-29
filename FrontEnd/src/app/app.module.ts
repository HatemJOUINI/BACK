import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbThemeModule, NbLayoutModule, NbSidebarModule,
  NbCardModule, NbTabsetModule, NbCheckboxModule,
  NbProgressBarModule, NbMenuModule, NbDialogModule,
  NbToastrModule, NbDatepickerModule, NbActionsModule
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { NavComponent } from './shared/layout/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { NgxAuthComponent } from './auth/ngx-auth/ngx-auth.component';
import { NgxLoginComponent } from './auth/ngx-login/ngx-login.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    NavComponent,
    NgxAuthComponent,
    NgxLoginComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
    BrowserModule,
    FormsModule,
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
    NbActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
