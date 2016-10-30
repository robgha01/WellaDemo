import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-search", // <my-search></my-search> 
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log("Hello Search");
  }

}