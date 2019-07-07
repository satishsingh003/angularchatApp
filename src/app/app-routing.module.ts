import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCompComponent }      from './component/main-comp/main-comp.component';



const routes: Routes = [
  { path: '', component:  MainCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
