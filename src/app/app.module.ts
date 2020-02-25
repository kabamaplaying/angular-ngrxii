import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from './scoreboard.reducer';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginPagecomponentComponent } from './login-pagecomponent/login-pagecomponent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({ game: fromScoreboard.reducer }) ],
  declarations: [ AppComponent, HelloComponent, LoginPagecomponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
