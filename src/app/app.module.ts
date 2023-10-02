import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './grid/grid.component';
import { SimpleComponent } from './simple/simple.component';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    GridComponent,
    SimpleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule, 
    ButtonModule,
    PortalModule
  ],
  providers: [],
  entryComponents:[SimpleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
