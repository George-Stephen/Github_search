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
  profiles : any;
  repos : any;

  constructor(  private findprofile : ServicesService,private repos_get : ReposEnquiryService) { 
    this.findprofile.getprofile().subscribe(userprofile =>{
      console.log(userprofile)
      this.profiles = userprofile

    })
    this.repos_get.getrepos().subscribe(repos =>{
      
      this.repos = repos;
      console.log(this.repos);
    })

  }

  ngOnInit(): void {
  }

}
