import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { RegisterComponent } from './register/register';
import { AboutComponent } from './about/about';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { FeedbackComponent } from './feedback/feedback';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    RegisterComponent,
    AboutComponent,
   
    TopBarComponent,
    ProductListComponent,

    ProductDetailsComponent,
    CartComponent,
    FeedbackComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
