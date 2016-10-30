import { Component } from "@angular/core";

import { ApiService } from "./shared";

import "../style/app.scss";

@Component({
  selector: "wella-poc", // <wella-poc></wella-poc>
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  url = "https://github.com/preboot/angular2-webpack";

  constructor(private api: ApiService) {
    // Do something with api
  }
}
