import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { LoginPagecomponentComponent } from './login-pagecomponent.component';
import { PostService } from './post.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoginPagecomponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostService]
})
export class AppModule { }
