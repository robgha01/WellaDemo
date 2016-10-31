import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

defaultFirebase({
  apiKey: "AIzaSyCpa4_ei6Kjl0bvdyM6moVU_tXSP8TlyCY",
  authDomain: "wellapoc.firebaseapp.com",
  databaseURL: "https://wellapoc.firebaseio.com",
  storageBucket: "wellapoc.appspot.com"
});

firebaseAuthConfig({
  method: AuthMethods.Popup
});

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
  ]
})
export class CoreModule { }
