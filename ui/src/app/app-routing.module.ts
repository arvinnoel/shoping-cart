import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';

import { RegisterComponent } from './register/register';
import { AboutComponent } from './about/about';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackComponent } from './feedback/feedback';


const routes: Routes = [
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent},
{ path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
