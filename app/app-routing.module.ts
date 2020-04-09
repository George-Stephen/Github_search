import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from '../app/profile/profile.component';
import {FormComponent} from '../app/form/form.component'
import {RepositoriesComponent} from '../app/repositories/repositories.component'


const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'repos', component: RepositoriesComponent},
  { path: 'start', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
