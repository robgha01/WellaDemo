import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-courses", // <my-courses></my-courses>
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log("Hello Courses");
  }

}
