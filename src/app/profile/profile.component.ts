import { Component, OnInit } from "@angular/core";

@Component({
    selector: "my-profile", // <my-profile></my-profile>
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log("Hello profile");
    }

}
