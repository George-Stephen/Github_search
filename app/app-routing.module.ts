import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from '../app/profile/profile.component';
import {InvalidComponent} from './invalid/invalid.component'
import {RepositoriesComponent} from '../app/repositories/repositories.component'


const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'repos', component: RepositoriesComponent},
  { path:'**', component:InvalidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
