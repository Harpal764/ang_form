import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
private isLogin = false;
  constructor() { }
  public AuthenticateUser(user:any){
    if(user.email=="admin@gmail.com" && user.password=="123"){
     localStorage.setItem("user_autho",user.email);
      return true;
    }
    else{
      return false;
    }
  }

public GetLogin(){
 return this.isLogin
}

public SetLogin(){
  this.isLogin = true;
}
public CheckAuthentication(){
  if(localStorage.getItem("user_autho")!=null){
     this.SetLogin()

  }else{
    this.isLogin=false;

  }
}

}
