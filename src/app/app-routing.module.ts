import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
{path : 'create',component: CreateEmployeeComponent},
{path : 'employee', component : EmployeeComponent},
{path : 'admin', component : AdminComponent},
{path : 'demo', component : DemoComponent},
{path : '**', component: PageNotFoundComponent},
{path : '',redirectTo: '/create',pathMatch:'full'}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
