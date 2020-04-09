import { Component, OnInit } from '@angular/core';
import {ReposEnquiryService} from '../repos-enquiry.service';
import {ServicesService} from '../profile/services.service';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos : any;
  username : string;

  constructor(public repos_get : ReposEnquiryService, public user : ServicesService) {
  }
  showRepos(){
    this.repos_get.updateprofile(this.username)
    this.repos_get.getrepos().subscribe(repos =>{  
     this.repos = repos;
     console.log(this.repos);
   })
 }
  ngOnInit(): void {
  }

}
