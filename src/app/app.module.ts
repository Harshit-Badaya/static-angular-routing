import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginviewComponent } from './loginview/loginview.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';


const routes:Routes = [
  { path: 'login', component: LoginviewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: 'home' }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
