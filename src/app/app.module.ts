import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CheckDataPipe } from './pipes/check-data.pipe';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Add_categoryComponent } from './components/add_category/add_category.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { LoadingToastComponent } from './components/loading-toast/loading-toast.component';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {SignupComponent} from './components/signup/signup.component';
import {Category_listComponent} from './components/category_list/category_list.component';
import {Expense_listComponent} from './components/expense_list/expense_list.component';
import {Add_expenseComponent} from './components/add_expense/add_expense.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CheckDataPipe,
    Add_categoryComponent,
    Category_listComponent,
    Expense_listComponent,
    Add_expenseComponent,
    DateFormatPipe,
    LoadingToastComponent,
    SignupComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        ToastrModule.forRoot({
            positionClass: 'toast-top-center',
            enableHtml: true
        }),
        BsDropdownModule.forRoot(),
        AgGridModule.withComponents([
        ]),
        BsDatepickerModule.forRoot()
    ],
  entryComponents: [LoadingToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
