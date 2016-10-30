import { TestBed } from "@angular/core/testing";

import { MyProfileComponent as MyProfileComponent } from "./my-profile.component";

describe("My Profile Component", () => {
  beforeEach(() => {
      TestBed.configureTestingModule({ declarations: [MyProfileComponent]});
  });

  it("should ...", () => {
      const fixture = TestBed.createComponent(MyProfileComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain("About Works!");
  });

});
