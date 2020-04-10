import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {environment } from '.././environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReposEnquiryService {
  repos : any;
  private Username : string;

  constructor( private http : HttpClient ) { 
  }
  getrepos(){
    let promise = new Promise((resolve)=>{
    
    this.http.get("https://api.github.com/users/" + this.Username + "/repos?client_id =" + environment.clientId+ "&client_secret=" + environment.clientsecret).toPromise().then(repos =>{
      this.repos = repos
    resolve()
    })
    })
    return promise
  }
  updateprofile(username : string){
    this.Username = username

  }
}
