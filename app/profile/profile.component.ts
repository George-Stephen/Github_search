import { Component, OnInit } from '@angular/core';
import {ServicesService} from './services.service';
import {User} from '../user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles : any;

  constructor(  private findprofile : ServicesService) { 
    this.findprofile.getprofile().subscribe(userprofile =>{
      console.log(userprofile)
      this.profiles = userprofile

    })
  }

  ngOnInit(): void {
  }

}
