import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cover-Sheet',
  templateUrl: './Cover-Sheet.component.html',
  styleUrls: ['./Cover-Sheet.component.scss']
})
export class CoverSheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("This is coversheet")
  }

}
