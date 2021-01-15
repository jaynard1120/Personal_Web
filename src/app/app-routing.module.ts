import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path:'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
