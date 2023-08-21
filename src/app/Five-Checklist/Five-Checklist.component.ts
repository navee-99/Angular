import { List } from './../generalInspectionReport';
import { Component, OnInit,Input } from '@angular/core';
import { GeneralInspectionServiceService } from '../general-inspection-service.service';

import { generalInspectionReport } from '../generalInspectionReport';
import { lstGenVoList } from '../generalInspectionReport';
@Component({
  selector: 'app-Five-Checklist',
  templateUrl: './Five-Checklist.component.html',
  styleUrls: ['./Five-Checklist.component.scss']
})
export class FiveChecklistComponent implements OnInit {
  @Input() fechdata = { buyOffType: 'PS', dieSetNo: 'Dienumber', userName: 'GSUMANKU' };
  generalInpectionfetchData:generalInspectionReport;
  generalInspectionList:[lstGenVoList];
  documentList:lstGenVoList[] = [] ;
  blankList:lstGenVoList[] = [];
  finishedPart:lstGenVoList [] = [];
  statusList:List[] = [];
  selectedstatus = "";

  input:any={};



  constructor(public restApi:GeneralInspectionServiceService) { }
  save(){
    console.log(this.documentList)
    console.log(this.blankList)
    console.log(this.finishedPart)
  }
  documentSave(){
    console.log(this.documentList)
    this.input = {dieSetNo:"Dienumber",buyOffType:"PS",userName:"GSUMANKU",lstGenVo:[this.documentList]};
    console.log(this.input)
  }
  blankSave(){
    console.log(this.blankList)
    this.input = {dieSetNo:"Dienumber",buyOffType:"PS",userName:"GSUMANKU",lstGenVo:[this.blankList]};
    console.log(this.input)

  }
  finishedPartSave(){
    console.log(this.finishedPart)
    this.input = {dieSetNo:"Dienumber",buyOffType:"PS",userName:"GSUMANKU",lstGenVo:[this.finishedPart]};
    console.log(this.input)
  }
  ngOnInit() {
    this.featchdataApi(this.fechdata);

  }

  featchdataApi(details: any) {
    console.log(details)
    this.restApi.fetchGeneralInspection(details).subscribe((data) => {
     this.generalInpectionfetchData = data;
     this.statusList = this.generalInpectionfetchData.lstSelVo.filter((list: List)=> list.key != 0);
     console.log(this.statusList);
     console.log(data);

     this.generalInspectionList = this.generalInpectionfetchData.lstGenVo
     this.documentList = this.generalInspectionList.filter((list:lstGenVoList)=> list.cat1 == "A");
     console.log("Document")
     console.log(this.documentList)
     this.blankList = this.generalInspectionList.filter((list:lstGenVoList)=> list.cat1 == "B");
     console.log("blankList")
     console.log(this.blankList)
     this.finishedPart = this.generalInspectionList.filter((list:lstGenVoList)=> list.cat1 == "C");
     console.log("finishedPart")
     console.log(this.finishedPart)

    });
  }


}
// chartOption: EChartsOption = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//   },
//   yAxis: {
//     type: 'value',
//   },
//   series: [
//     {
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line',
//     },
//   ],
// };
