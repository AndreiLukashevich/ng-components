import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';

import { NgxModule } from './ngx/ngx.module';
import { PickersModule } from './pickers/pickers.module';
import { ModalWindowsModule } from './modal-windows/modal-windows.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { PrimengModule } from './primeng/primeng.module';
import { DurationComponent } from './duration/duration.component';

import * as $ from 'jquery';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DurationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    PickersModule,
    ModalWindowsModule,
    AutocompleteModule,
    PrimengModule,
    NgxModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
