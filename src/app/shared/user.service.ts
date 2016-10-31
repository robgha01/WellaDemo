import { Injectable } from "@angular/core";
import { AngularFire, AuthProviders, FirebaseAuthState } from "angularfire2";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UserServiceState } from "./UserServiceState";

@Injectable()
export class UserService {
  user: FirebaseAuthState = null;
  private userStateSubject: BehaviorSubject<UserServiceState> = new BehaviorSubject(new UserServiceState());
  public userStateObservable: Observable<UserServiceState> = this.userStateSubject.asObservable();

  constructor(public af: AngularFire) {
    var state = new UserServiceState();
    this.af.auth.subscribe(user => {
      if (user) {
          state.isLoggedIn = true;
          state.name = user.auth.displayName;
          state.imageUrl = user.auth.photoURL;
          state.email = user.auth.email;

          // user logged in
          this.user = user;

        } else {
          // user not logged in
          this.user = null;
      }

      this.userStateSubject.next(state);
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
}
