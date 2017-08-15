import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { PickersComponent } from './pickers/pickers.component';

import { PickersModule } from './pickers/pickers.module';
import { ModalWindowsModule } from './modal-windows/modal-windows.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PickersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    PickersModule,
    ModalWindowsModule,
    AutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
