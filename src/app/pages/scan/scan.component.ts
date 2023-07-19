import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { HttpClient,HttpHeaders } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import{EmpService}from './EmpService';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class  ScanComponent  {
  selecttedFile:File |null=null;
  constructor(private http: HttpClient){ 
    onFileChange(event: any) {
      this.selectedFile = event.target.files[0];

  }
  onFileSelected(event: Event) {
    event.preventDefault();

    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('https://api.example.com/upload', formData)
      .subscribe(response => {
        console.log('File uploaded successfully');
      }, error => {
        console.error('File upload failed:', error);
      });
    }
 
}


  //http client