import { UserService } from "../shared/";
import { Router } from "@angular/router"

export abstract class ProtectedComponent {
  constructor(public userService: UserService, protected router: Router) {
    if (userService.isLoggedIn() === false) {
      // Do someting ?
      this.router.navigate(["login"]);
    }
  }
}
