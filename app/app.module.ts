import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ServicesService} from '../app/profile/services.service'
import { FormsModule } from '@angular/forms';
import {RoutingModule} from './routing/routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { InvalidComponent } from './invalid/invalid.component';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    RepositoriesComponent,
    InvalidComponent,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
