import { Component, OnInit } from '@angular/core';
import {ServicesService} from './services.service';
import {ReposEnquiryService} from '../repos-enquiry.service'
import {User} from '../user'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username : string;
  profiles : any;
  

  constructor(  public findprofile : ServicesService) { 
    
  }
  addUser(){
    this.findprofile.updateprofile(this.username);
    
    this.findprofile.getprofile().subscribe(userprofile =>{
      console.log(userprofile)
      this.profiles = userprofile

    })
    
   
    
  }

  ngOnInit(): void {
  }

}
