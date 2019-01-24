import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSideMenuComponent } from './main-side-menu/main-side-menu.component';
import { BookAShipmentComponent } from './book-a-shipment/book-a-shipment.component';
import { ShellComponent } from './shell.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ShellComponent,
    MainSideMenuComponent,
    BookAShipmentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ShellModule { }
