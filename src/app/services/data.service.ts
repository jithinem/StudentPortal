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
  saveDetails:any={
    gr:{fname:"Jithin",lname:"E M",gender:"Male",dob:"30-09-1995",nation:"Indian",add:"Erandathara(H),Edavanakkad P O, Ernakulam,682502",quali:"Btech",gs:"76",gr:"345",date:"12-12-2022"}
  };
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
  save(fname:any,lname:any,gender:any,dob:any,nation:any,add:any,quali:any,gs:any,gr:any,date:any){
    if(gr){
      this.saveDetails[gr]={
        fname:fname,
        lname:lname,
        gender:gender,
        dob:dob,
        nation:nation,
        add:add,
        quali:quali,
        gs:gs,
        gr:gr,
        date:date
      }
      return true;
    }
    else{
      return false;
    }
  }
  seePreview(){
    return this.saveDetails;
  }
}
