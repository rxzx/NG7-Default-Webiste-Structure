import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { BookAShipmentComponent } from './shell/book-a-shipment/book-a-shipment.component';
import { DashboardComponent } from './shell/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'book-a-shipment', component: BookAShipmentComponent, data: { title: 'Book A Shipment' } },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
