import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{EmpService}from './EmpService';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class  ScanComponent implements OnInit {
  constructor(private http: HttpClient){ 

  }
  ngOnInit():void {
  

  }
  onChangef():void {
    this.http.post('',)
  }
}


  //http client