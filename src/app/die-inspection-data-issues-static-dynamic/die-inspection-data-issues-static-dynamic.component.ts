import { Component, OnInit, Input } from '@angular/core';
import { flush } from '@angular/core/testing';
import { DieInspectionDataIssuesStaticDynamicServiceService } from '../die-inspection-data-issues-static-dynamic-service.service';
@Component({
  selector: 'app-die-inspection-data-issues-static-dynamic',
  templateUrl: './die-inspection-data-issues-static-dynamic.component.html',
  styleUrls: ['./die-inspection-data-issues-static-dynamic.component.css']
})
export class DieInspectionDataIssuesStaticDynamicComponent implements OnInit {
  fetchdata1 = {
    "dieSetNo": "Dienumber", "buyOffType": "PS",
    "type": "STAT",
    "userName": "MCHAND63"
  }
  fetchdata2 = { "dieSetNo": "Dienumber", "buyOffType": "PS", "type": "DYNA", "userName": "MCHAND63" }
  list: any = [];
  collections: any = [];
  condition1: boolean = false;
  condition2: boolean = false;
  condition3: boolean = false;
  condition4: boolean = false;
  cond1: boolean = false;
  cond2: boolean = false;
  cond3: boolean = false;
  cond4: boolean = false;
  url1: any;
  url2: any;
  url3: any;
  url4: any;
  geeks: boolean = false;
  geeks1: boolean = false;
  geeks2: boolean = false;
  geeks3: boolean = false;
  array1: any = [];
  array2: any = [];
  array3: any = [];
  array4: any = [];
  isClicked1: boolean = false;
  isClicked2: boolean = false;


  currentindex: number = 0;
  @Input() indicators = true;
  static: boolean = false;
  dynamic: boolean = false;


  constructor(private service: DieInspectionDataIssuesStaticDynamicServiceService) { }

  ngOnInit(): void {

    this.service.fetchIssueDataStatic(this.fetchdata1).subscribe((res) => {
      this.list = res;
      console.log(this.list.data[9].data)




    }, error => {
      console.log(error)
    });

    this.service.fetchIssueDataDynamic(this.fetchdata2).subscribe((res) => {
      this.collections = res;
      console.log(this.collections)
    }, error => {
      console.log(error)
    });

    this.isClicked1 = true;
    this.dynamic = true;


  }
  onclick1() {
    this.dynamic = true;
    this.static = false;
    this.isClicked1 = true;
    this.isClicked2 = false;
  }
  onclick2() {
    this.static = true;
    this.dynamic = false;
    this.isClicked1 = false;
    this.isClicked2 = true;
  }
//static issue image gallary logic
  issueimagegallary1(image: any) {
    this.geeks = true;

    for (let i = 0; i < this.list.data[7].data.length; i++) {
      if (this.list.data[7].data[i].image != null && this.list.data[7].data[i].image.length === 1 && this.list.data[7].data[i].image[0] === image) {
        this.condition1 = true;
        this.condition2 = false;
        this.url1 = image;
      }
      else if (this.list.data[7].data[i].image != null && this.list.data[7].data[i].image.length > 1 && this.list.data[7].data[i].image[0] === image) {
        this.condition2 = true;
        this.condition1 = false;

        this.array1 = this.list.data[7].data[i].image;
        console.log(this.array1)
      }
    }

  }
//static issue image next and previous button logic
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
 
//static solution image gallary logic
  solimagegallary1(image1: any) {
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
//static solution image next and previous button logic
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

  // ending of static

  //dynamic issue image gallary logic
  issueimagegallary2(image: any) {
    this.geeks2 = true;

    for (let i = 0; i < this.collections.data[7].data.length; i++) {
      if (this.collections.data[7].data[i].image != null && this.collections.data[7].data[i].image.length === 1 && this.collections.data[7].data[i].image[0] === image) {
        this.condition3 = true;
        this.condition4 = false;
        this.url3 = image;
      }
      else if (this.collections.data[7].data[i].image != null && this.collections.data[7].data[i].image.length > 1 && this.collections.data[7].data[i].image[0] === image) {
        this.condition4 = true;
        this.condition3 = false;

        this.array3 = this.collections.data[7].data[i].image;
        console.log(this.array3)
      }
    }

  }
//dynamic issue image next and previous button logic
  next2() {
    if (this.currentindex < this.array3.length - 1) {
      this.currentindex++;
    }
    else {
      this.currentindex = 0;
    }
  }
  pre2() {
    if (this.currentindex > 0) {
      this.currentindex--;
    }
    else {
      this.currentindex = 0;
    }
  }
  // dynamic solution image gallary logic
  solimagegallary2(image1: any) {
    this.geeks3 = true;

    for (let i = 0; i < this.collections.data[9].data.length; i++) {

      if (this.collections.data[9].data[i].image != null && this.collections.data[9].data[i].image.length === 1 && this.collections.data[9].data[i].image[0] === image1) {
        this.cond3 = true;
        this.cond4 = false;
        this.url4 = image1;
      }
      else if (this.collections.data[9].data[i].image != null && this.collections.data[9].data[i].image.length > 1 && this.collections.data[9].data[i].image[0] === image1) {
        this.cond4 = true;
        this.cond3 = false;

        this.array4 = this.collections.data[9].data[i].image;
        console.log(this.array4)
      }
    }

  }
//dynamic solution image next and previous button logic
  next3() {
    if (this.currentindex < this.array4.length - 1) {
      this.currentindex++;
    }
    else {
      this.currentindex = 0;
    }
  }
  pre3() {
    if (this.currentindex > 0) {
      this.currentindex--;
    }
    else {
      this.currentindex = 0;
    }
  }
  //ending of dynamic
  
  selectimage(index: number): void {
    this.currentindex = index;
  }

  add(array: any): string {

    if (array.image != null && array.image.length > 0) {
      console.log(array.image[0]);
      return array.image[0];

    }

    return "";
  }

}

