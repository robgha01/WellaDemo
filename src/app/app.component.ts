import { Component, NgZone } from '@angular/core';
import { Router } from "@angular/router"
import { ApiService, UserService } from "./shared";
import { Observable } from "rxjs/Observable";

import "../style/app.scss";

@Component({
  selector: "wella-poc", // <wella-poc></wella-poc>
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  url = "https://github.com/preboot/angular2-webpack";
  name: string = "";
  loggedin: boolean = false;

  constructor(public userService: UserService, protected router: Router) {
    this.userService.userStateObservable.subscribe(change => {
      this.name = change.name;
      this.loggedin = change.isLoggedIn;
    });

    this.ensureAuthorized();
  }

  ensureAuthorized() {
    if (this.loggedin === false) {
      this.router.navigate(["login"]);
    }
  }
}
