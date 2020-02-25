import { Component, OnInit } from '@angular/core';
import { login } from './login-pagecomponent';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-login-pagecomponent',
  templateUrl: './login-pagecomponent.component.html',
  styleUrls: ['./login-pagecomponent.component.css']
})
export class LoginPagecomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

onSubmit(username: string, password: string) {
  store.dispatch(login({ username: username, password: password }));
}
}