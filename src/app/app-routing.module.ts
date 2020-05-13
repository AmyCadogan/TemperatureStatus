import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './temp-list/temp-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-temp' },
  { path: 'temp-list', component: TempdevListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }