import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  preview:any;
  constructor(private router:Router,private ds:DataService){
    this.preview=this.ds.seePreview();
  }
  ngOnInit(): void{

  }


}
