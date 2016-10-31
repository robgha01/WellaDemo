import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { UserService } from "../shared/";
import { ProtectedComponent } from "../abstraction/ProtectedComponent";

@Component({
  selector: "my-profile", // <my-profile></my-profile>
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent extends ProtectedComponent implements OnInit {
  user: firebase.User = null;
  name: string = "";
  imageUrl: string = "";
  email: string = "";

  constructor(public userService: UserService, protected router: Router) {
    super(userService, router);
    var user = userService.user.auth;
    this.user = user;
    this.name = user.displayName;
    this.imageUrl = user.photoURL;
    this.email = user.email;
  }

  ngOnInit() {
    console.log("Hello profile");
  }

}
