import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router,private ds:DataService){}
  ngOnInit() : void{
  }
  fname:any;
  lname:any;
  gender:any;
  dob:any;
  nation:any;
  add:any;
  quali:any;
  gs:any;
  gr:any;
  date:any;
  preview:any;

  logout(){
    this.router.navigateByUrl('');
  }
  save(){
    // alert('saved');
    var fname=this.fname;
    var lname=this.lname;
    var gender=this.gender;
    var dob=this.dob;
    var nation=this.nation;
    var add=this.add;
    var quali=this.quali;
    var gs=this.gs;
    var gr=this.gr;
    var date=this.date;
    const result=this.ds.save(fname,lname,gender,dob,nation,add,quali,gs,gr,date);
    if(result){
      alert('details saved successfully');
    }
    else{
      alert('details couldnot be saved');
    }
  }

}
