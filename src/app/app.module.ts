import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { DefaultComponent } from './components/default/default.component';
import { ButtonComponent } from './components/button/button.component';
import { CreateDuckComponent } from './components/create-duck/create-duck.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainframeComponent,
    DefaultComponent,
    ButtonComponent,
    CreateDuckComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
