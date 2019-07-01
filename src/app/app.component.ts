import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
//import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
contentArray:any
theatre:any
smovie:any
stheatre='';
tickets='';
phonenumber='';
data=[];
phone="";


  constructor(private http: HttpClient) { }

 ngOnInit(){
  
  this.getList();
  
 }
 
getList(){
 
  this.http.get('http://localhost:9000/api/movies')
  .subscribe((res) => {
    this.contentArray = res;

  }, error => {
    console.log(error);
  });

  ;
}

postList(id,namem){
  this.stheatre='';
 this.smovie=namem;
  this.http.post('http://localhost:9000/api/theatres', id)
  .subscribe((res) => {
    
    this.theatre = res;
   // console.log(this.theatre)
  }, error => {
    console.log(error);
  });

}

bookingDetails(namet){

  this.stheatre=namet;
  
 
}
book()
{
 
  // this.data.push({
  //   ticket:this.tickets
  // })
  // console.log(this.data);
  // alert(`${this.tickets}  ${this.phone}`);
  this.tickets=`${this.tickets}`;
  this.phonenumber=`${this.phonenumber}`;
alert("your ticket is booked")
}

post(){
  
}

}
