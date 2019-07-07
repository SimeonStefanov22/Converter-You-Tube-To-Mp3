import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {ConvertService} from "./services/convert.service";
import {RouterModule} from "@angular/router";
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ConvertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
