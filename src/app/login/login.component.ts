import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private ds:DataService,private router:Router){}
  ngOnInit(): void{

  }
  uname:any;
  pswd:any;
  login(){
    var uname=this.uname;
    var pswd=this.pswd;
    var registerDetails=this.ds.registerDetails;
    const result=this.ds.login(uname,pswd);
    if(result){
      alert('login successful');
      this.router.navigateByUrl('home');
    }
    else{
      alert('Login failed');
    }

  }

}
