import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private Username : string;
  private clientid: '728f208a302d5b900d25';
  private clientsecret : '6dcfb305cb5931322d8b9a372511abb7fa5924db';

  constructor( private http : HttpClient ) { 
    console.log("It's Alive !");
    this.Username = "George-Stephen";
  }


  getprofile(){
    return this.http.get("https://api.github.com/users/" + this.Username + "?client_id =" + this.clientid + "&client_secret=" + this.clientsecret)
  }
}