import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { CalendarModule } from "angular2-calendar";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CoursesComponent } from "./courses/courses.component";
import { LoginComponent } from "./login/login.component";
import { SearchComponent } from "./search/search.component";
import { ApiService, UserService } from "./shared";
import { routing } from "./app.routing";

import { removeNgStyles, createNewHosts } from "@angularclass/hmr";

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders,
  defaultFirebase,
  firebaseAuthConfig
} from "angularfire2";

const firebaseConfig = {
  apiKey: "AIzaSyCpa4_ei6Kjl0bvdyM6moVU_tXSP8TlyCY",
  authDomain: "wellapoc.firebaseapp.com",
  databaseURL: "https://wellapoc.firebaseio.com",
  storageBucket: "wellapoc.appspot.com"
};

defaultFirebase(firebaseConfig);

firebaseAuthConfig({
  method: AuthMethods.Popup
});

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    CalendarModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CalendarComponent,
    CoursesComponent,
    LoginComponent,
    SearchComponent
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

  hmrOnInit(store) {
    console.log("HMR store", store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
