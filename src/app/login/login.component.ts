import { Component, OnInit } from "@angular/core";
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: "my-login", // <my-login></my-login>
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user = {};

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
    console.log("Hello Login");
  }

}
