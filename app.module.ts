import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { courcesComponent } from "./cources/cources.component";
import { googlecomponent } from "./jspiders.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"; //directive
import { FormsModule } from "@angular/forms"; //package

import { AppComponent } from "./app.component";
import { from } from "rxjs";
import { HeaderComponent } from "./header/header.component";
import { CoolComponent } from "./cool/cool.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";

//IMPORT router module
import { RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    googlecomponent,
    courcesComponent,
    HeaderComponent,
    CoolComponent,
    LoginComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    UserComponent,
    DirectiveComponent
  ], //register in app.module.file(all components,pipes,directives)
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "**", component: PagenotfoundComponent } //pagenotfound should always come last
    ])
  ], //all modules can register in import array
  providers: [], //all services and dependency inject can register here
  bootstrap: [AppComponent] //to register root component
})
export class AppModule {}
