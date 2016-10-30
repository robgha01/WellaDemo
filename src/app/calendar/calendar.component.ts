import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-calendar", // <my-calendar></my-calendar>
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log("Hello Calendar");
  }

}
