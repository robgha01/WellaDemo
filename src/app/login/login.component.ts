import { Component, OnInit } from "@angular/core";
import { AngularFire, AuthProviders } from 'angularfire2';
import { UserService } from "../shared/";
import { Router } from '@angular/router'

@Component({
  selector: "my-login", // <my-login></my-login>
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, protected router: Router) {

  }

  login() {
    this.userService.login().then(resolve => {
      this.router.navigate(["profile"]);
    });
  }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {
    console.log("Hello Login");
  }

}
