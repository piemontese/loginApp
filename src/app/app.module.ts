import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginBootstrapComponent } from './login-bootstrap/login-bootstrap.component';
import { LoginAngularComponent } from './login-angular/login-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBootstrapComponent,
    LoginAngularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
