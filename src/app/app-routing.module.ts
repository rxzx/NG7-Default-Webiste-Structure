import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { BookAShipmentComponent } from './shell/book-a-shipment/book-a-shipment.component';


const routes: Routes = [
  { path: '', redirectTo: '/book-a-shipment', pathMatch: 'full' },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'book-a-shipment', component: BookAShipmentComponent, data: { title: 'Book A Shipment' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
