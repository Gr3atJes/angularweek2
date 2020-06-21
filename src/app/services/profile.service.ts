import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'Iv1.dddf139109a8f5cb';
  private clientsecret = '54100f5a159e1ef7565e627da884ac55d0f1b423';

  constructor(private http:Http) {
    console.log("service is now ready")
    this.username = 'Gr3atJes';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid +
     "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "?/repos?client_id=" + this.clientid +
    "&client_secret=" + this.clientsecret)
    .map(res => res.json());

   }

   updateProfile(username:string){
     this.username = username;
   }
}
