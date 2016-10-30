import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { CoursesComponent } from "./courses/courses.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { LoginComponent } from "./login/login.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "profile", component: ProfileComponent },
    { path: "courses", component: CoursesComponent },
    { path: "calendar", component: CalendarComponent },
    { path: "login", component: LoginComponent },
    { path: "search", component: SearchComponent }
];

export const routing = RouterModule.forRoot(routes);
