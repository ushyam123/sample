import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'child', component: ChildComponent },
  {path:'home2', component:Home2Component},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home3', component:Home3Component}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
