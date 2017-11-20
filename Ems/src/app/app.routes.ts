import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { HomePageComponent } from './home-page/home-page.component'
const routes:Routes = [
    { path: 'profile', component: UserProfileComponent },
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]



@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
    ],
  })
  export class AppRoutingModule { }