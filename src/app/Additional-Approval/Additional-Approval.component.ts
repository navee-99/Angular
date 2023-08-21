import { Component, OnInit } from '@angular/core';
import { FormGroup,FormsModule,FormControl,Validators,FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IBuyOffserviceService } from '../additionalApprovalservice.service';
import { ProgList } from '../prog-list';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-Additional-Approval',
  templateUrl: './Additional-Approval.component.html',
  styleUrls: ['./Additional-Approval.component.scss']
})
export class AdditionalApprovalComponent implements OnInit {

  data:any;
  username:any={};
  program:any=[];
  prgrmList:[];
  selcectPrograme:ProgList[];
  approvalForm=new  FormGroup({
    userName:new FormControl(this.username,[Validators.required,Validators.minLength(4)]),
    role:new FormControl('',[Validators.required,Validators.minLength(1)]),
    prgrmList:new FormControl('',[Validators.required,Validators.minLength(4)]),
    region:new FormControl('',[Validators.required,Validators.minLength(4)]),
    AdminComment:new FormControl('',[Validators.required,Validators.minLength(4)]),
     })
     
  constructor(private serv:IBuyOffserviceService) { }

  role:string='';
  aproveldata:any={};
  AdminComment:any={};
  Region:any={};
  ngOnInit() {
    this.addaprove();



  }
  addaprove(){
    this.serv.addAprovrl().subscribe(res =>{
      this.data =res;
      console.log(this.data)
      console.log(this.data[1].userName)


      this.username=this.data[1].userName
      this.program=this.data
      console.log(this.program)
  }
    )
}
data2:any={};

submit(){

  console.log(this.approvalForm.value)
     this.serv.modifyaprovel(this.approvalForm.value).subscribe(res =>{
       this.data=res
     })
}
fetch(){

 
  console.log(this.approvalForm.value.userName)
  console.log( this.data.length)

  for(let i = 0; i < this.data.length; i++){
  // console.log(this.data.)

  if(this.data[i].userName ===this.approvalForm.value.userName){

    console.log(this.data[i])

    this.data2=this.data[i]

    this.data2.prgrmList=this.data[i].prgrmList;

    let selected = this.data2.prgrmList;
  
let sum = selected.toString().split(',');
console.log(sum+'')

console.log(this.data2.prgrmList.length)
  }
  }

 }
 typeahead: FormControl = new FormControl();
   suggestions: string [] = [];
  suggestion: string;
  show: boolean;
  fieldHistory: string [] = [];
  suggest() {
    
    this.suggestions = this.data2.prgrmList;
    this.show = true;
    console.log( this.suggestions)
  }
   selectSuggestion(prgrmList:any) {
    this.suggestion =" ";

    var index = this.fieldHistory.findIndex(function(element) {
      return element === prgrmList;
    });

    if (index === -1) {
      this.fieldHistory.push(prgrmList);
    } else {
      var firstPart = this.fieldHistory.slice(0, index);
      var secondPart = this.fieldHistory.slice(++index);

      this.fieldHistory = firstPart.concat(secondPart);
    }

    for (let i = 0; i < this.fieldHistory.length; i++) 
      this.suggestion = this.suggestion + "," + this.fieldHistory[i];

    this.typeahead.patchValue(this.suggestion);
    this.show = false;
  }
 
onsubmit(){

console.log(this.approvalForm.value)
}
  get CDSID(){
    return this.approvalForm.get('CDSID') 
  }
  // get Role(){
  //   return this.forms.get('Role')
  // }
  // get Region(){
  //   return this.forms.get('Region') 
  // }
  get Program(){
    return this.approvalForm.get('Program')
  }
  // get AdminComment(){
  //   return this.forms.get('AdminComment')
  // }
}

