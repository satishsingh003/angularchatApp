import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCompComponent }      from './component/main-comp/main-comp.component';
import { LoginComponent }      from './component/login/login.component';


const routes: Routes = [
  { path: 'main', component:  MainCompComponent},
  { path: '', redirectTo: '/chatLogin', pathMatch: 'full'},
  { path: 'chatLogin',  component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
