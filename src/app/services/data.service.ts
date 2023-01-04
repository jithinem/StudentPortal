import { Injectable } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router:Router) { }
  registerDetails:any={
    a:{phno:1000,email:"a@gmail.com",username:"a",password:"a"},
    b:{phno:1001,email:"b@gmail.com",username:"b",password:"b"}
  }
  login(uname:any,pswd:any){
    var registerDetails=this.registerDetails;
    if(uname in this.registerDetails){
      // return true;
      console.log(uname);
      
      if(pswd==this.registerDetails[uname]['password']){
        return true;
      }
      else{
        alert('Invalid password');
        return false;
      }
    }
    else{
      alert('Invalid username');
      return false;
    }
  }
  register(mob:any,email:any,uname:any,pswd:any){
    var registerDetails=this.registerDetails;
    if(uname in this.registerDetails){
      return false;
    }
    else{
      registerDetails[uname]={
        phno:mob,
        email:email,
        username:uname,
        password:pswd
      }
      return true;
    }
  }
}
