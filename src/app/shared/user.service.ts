import { Injectable } from "@angular/core";
import { AngularFire, AuthProviders, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class UserService {
  user: FirebaseAuthState = null;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        console.log(user);

        // user logged in
        this.user = user;
      } else {
        // user not logged in
        this.user = null;
      }
    });
  }

  login(): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  logout() {
    this.af.auth.logout();
  }

  isLoggedIn() {
    if (this.user) {
      return true;
    }

    return false;
  }
}
