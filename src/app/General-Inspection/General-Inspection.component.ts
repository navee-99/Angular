import { Component, OnInit,Input } from '@angular/core';
import { GeneralInspectionServiceService } from '../general-inspection-service.service';
import { Router } from '@angular/router';
import { generalInspectionReport } from '../generalInspectionReport';

@Component({
  selector: 'app-General-Inspection',
  templateUrl: './General-Inspection.component.html',
  styleUrls: ['./General-Inspection.component.scss']
})
export class GeneralInspectionComponent implements OnInit {

  @Input() fechdata = { buyOffType: 'PS', dieSetNo: 'Dienumber', userName: 'GSUMANKU' };

  generalInpectionfetchData:generalInspectionReport;

  constructor(public restApi:GeneralInspectionServiceService) { }

  ngOnInit() {
console.log("this is generalinspection")
  this.featchdataApi(this.fechdata);

  }
  featchdataApi(details: any) {
    console.log(details)
    this.restApi.fetchGeneralInspection(details).subscribe((data) => {
     this.generalInpectionfetchData = data;
     console.log(data);
     console.log(this.generalInpectionfetchData.lstSelVo);

    });
  }
}


