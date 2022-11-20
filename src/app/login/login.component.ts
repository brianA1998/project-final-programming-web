import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private service: LoginService, private route: Router) {}


  login() {
    this.service.login(this.username, this.password,
        () => {
          this.route.navigate(["/dashboard"])
        }
      )
  }

}
