import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import {ProfileComponent} from '../profile/profile.component';
import {InvalidComponent} from '../invalid/invalid.component'
import {RepositoriesComponent} from '../repositories/repositories.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'repos', component: RepositoriesComponent},
  { path:'**', component:InvalidComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
