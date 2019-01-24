import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSideMenuComponent } from './main-side-menu/main-side-menu.component';
import { BookAShipmentComponent } from './book-a-shipment/book-a-shipment.component';
import { ShellComponent } from './shell.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ShellComponent,
    MainSideMenuComponent,
    BookAShipmentComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    TopbarComponent,
    DashboardComponent
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
