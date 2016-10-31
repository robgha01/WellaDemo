import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import { UserService } from "../shared/";

@Component({
  selector: "my-profile", // <my-profile></my-profile>
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  user: firebase.User = null;
  name: string = "";
  imageUrl: string = "";
  email: string = "";

  constructor(public userService: UserService) {
    userService.userStateObservable.subscribe(value => {
      this.name = value.name;
      this.imageUrl = value.imageUrl;
      this.email = value.email;
    });
  }

  ngOnInit() {
    console.log("Hello profile");
  }

}
