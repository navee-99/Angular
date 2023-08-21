import { NgStyle } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import { DataIssuesServiceService } from '../data-issues-service.service';

@Component({
  selector: 'app-Data-Issues',
  templateUrl: './Data-Issues.component.html',
  styleUrls: ['./Data-Issues.component.scss']
})
export class DataIssuesComponent implements OnInit {
  fechdata =
    {
      "dieSetNo": "Dienumber",
      "buyOffType": "PS", "userName":
        "MCHAND63"
    }
  list: any = [];

  condition1: boolean = false;
  condition2: boolean = false;
  cond1:boolean=false;
  cond2:boolean=false;
  url1: any;
  url2:any;
  geeks: boolean = false;
  geeks1:boolean=false;
  array1: any = [];
  array2:any=[];
  

  currentindex: number = 0;
  @Input() indicators=true;


  constructor(private service: DataIssuesServiceService) {

  }

  ngOnInit() {
    console.log(this.fechdata)
    this.service.fetchIssueData(this.fechdata).subscribe((res) => {
      this.list = res;
      console.log(this.list)
    }, error => {
      console.log(error)
    });


  }
//issue image gallary logic
  issueimagegallary(image: any) {
    this.geeks = true;

    for (let i = 0; i < this.list.data[7].data.length; i++) {
      if ( this.list.data[7].data[i].image != null &&  this.list.data[7].data[i].image.length === 1 && this.list.data[7].data[i].image[0] === image) {
        this.condition1 = true;
        this.condition2 = false;
        this.url1 = image;
      }
      else if (this.list.data[7].data[i].image != null &&  this.list.data[7].data[i].image.length > 1 && this.list.data[7].data[i].image[0] === image) {
        this.condition2 = true;
        this.condition1 = false;

        this.array1 = this.list.data[7].data[i].image;
        console.log(this.array1)
      }
    }

  }

  
//solution image gallary logic
  solimagegallary(image1: any) {
    this.geeks1 = true;

    for (let i = 0; i < this.list.data[9].data.length; i++) {
      console.log(this.list.data[9].data.length)
      if (this.list.data[9].data[i].image != null && this.list.data[9].data[i].image.length === 1 && this.list.data[9].data[i].image[0] === image1) {
        this.cond1 = true;
        this.cond2 = false;
        this.url2 = image1;
      }
      else if (this.list.data[9].data[i].image != null && this.list.data[9].data[i].image.length > 1 && this.list.data[9].data[i].image[0] === image1) {
        this.cond2 = true;
        this.cond1 = false;

        this.array2 = this.list.data[9].data[i].image;
        console.log(this.array2)
      }
    }







  }







//issue image next and previous button logic
  next() {
    if (this.currentindex < this.array1.length - 1) {
      this.currentindex++;
    }
    else {
      this.currentindex = 0;
    }
  }
  pre() {
    if (this.currentindex > 0) {
      this.currentindex--;
    }
    else {
      this.currentindex = 0;
    }
  }
//solution image next and previous button logic
  next1() {
    if (this.currentindex < this.array2.length - 1) {
      this.currentindex++;
    }
    else {
      this.currentindex = 0;
    }
  }
  pre1() {
    if (this.currentindex > 0) {
      this.currentindex--;
    }
    else {
      this.currentindex = 0;
    }
  }
  selectimage(index:number):void{
    this.currentindex=index;
  }
  add(array:any): string {
    
    if( array.image!=null && array.image.length>0 ){
      console.log(array.image[0]);
      return array.image[0];
      
    }
  
  return "";
}
  
}
