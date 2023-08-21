import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { AppService } from '../shared/app.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-New-CheckList',
  templateUrl: './New-CheckList.component.html',
  styleUrls: ['./New-CheckList.component.scss']
})
export class NewCheckList {
  programList: any = ['B562', 'B563', 'B564']
  productionPlantList: any = ['SVAP', 'SVAD', 'SVAT']
  partNameList: any = ['PNL BDY SD INR RH/LH & Whell House INR RH', 'HDTuto', 'Nicesnippets']
  partList: any = ['E85-A246764/5-a & E453-A7428 ', 'P85-A246764/5-a & P453-A7428', 'T85-A246764/5-a & T453-A7428']
  diesetNumberList: any = ['653776D76G56R', '563E753H765T89', '635C7Q89U67']
  diesetLineupList: any = ['5,6,3,1,45,44,6', '1,23,34,56,3,2', '54,23,21,5,65,45,3']
  toolSupplierList: any = ['nanjing Qiaofeng']
  buyOffTypeList: any = ['Pre BuyOff', 'Final BuyOff']
e:any;
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  
  changeWebsite(e:any) {
    console.log(e.target.value);
  }
  
}