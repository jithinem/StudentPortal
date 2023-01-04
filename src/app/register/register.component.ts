import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private ds:DataService,private router:Router){}
  ngOnInit(): void{

  }
  mob:any;
  email:any;
  uname:any;
  pswd:any;
  register(){
    var mob=this.mob;
    var email=this.email;
    var uname=this.uname;
    var pswd=this.pswd;
    const result=this.ds.register(mob,email,uname,pswd);
    if(result){
      alert('Registration successful');
      this.router.navigateByUrl('');

    }
    else{
      alert('Registration failed');
    }
  }
}
