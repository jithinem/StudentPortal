import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'preview', component:PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
