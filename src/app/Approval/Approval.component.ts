import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApprovalserviceService } from '../approvalservice.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  // public approvalForm !:FormGroup;
 
  constructor(private formBuilder : FormBuilder,private http : HttpClient,private route : Router,private serv:ApprovalserviceService) { }
  approvalForm=new  FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    role:new FormControl('',[Validators.required,Validators.minLength(6)]),
    prgrmList:new FormControl('',[Validators.required,Validators.minLength(4)]),
    region:new FormControl('',[Validators.required,Validators.minLength(4)]),
  userComments:new FormControl('',[Validators.required,Validators.minLength(4)]),
    AdminComment:new FormControl('',[Validators.required,Validators.minLength(4)]),
     })
  data:any;
  ngOnInit() {

    this.userList()
    // this.approvalForm=this.formBuilder.group({
    //   userName:['',Validators.required,],
    //   role:['',Validators.required],
    //   prgrmList:[null,Validators.required],
    //   region:['',Validators.required],
    //   usercomment:['',Validators.required],
    //   AdminComment:['',Validators.required]

    // })
  }
    userList(){
      this.serv.Aprovrl().subscribe(res =>{
        this.data =res;
        console.log(this.data)
        console.log(this.data[1].userName)
  
  
        // this.username=this.data[1].userName
        // this.program=this.data
        // console.log(this.program)
    }
      )
  }
  
  aproveldata:any={};
  selectOption:any=[];
  signUp(){
    this.serv.Aproved(this.approvalForm.value).subscribe(res=>{
        this.data =res;
        console.log(this.data)
      console.log("Success",this.approvalForm.value);
       alert("successFull");
      this.approvalForm.reset();
       this.route.navigate(['additionalApproval']);
      })
    
   }
   data2:any={};
   deny(){
    this.serv.deny(this.approvalForm.value).subscribe(res=>{
      this.data =res;
      console.log(this.data)
    console.log("Success",this.approvalForm.value);
     alert("successFull");
    this.approvalForm.reset();
     this.route.navigate(['additionalApproval']);
    })
   }
   
   
   fetch(){

    console.log(this.approvalForm.value.userName)
    console.log( this.data.length)

    for(let i = 0; i < this.data.length; i++){
    //console.log(this.data.)

    if(this.data[i].userName ===this.approvalForm.value.userName){

      console.log(this.data[i])

      this.data2=this.data[i]

      this.selectOption=this.data2.prgrmList.toString().split(',')

      console.log( this.selectOption)
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
   selectSuggestion(item:any) {
    this.suggestion =" ";

    var index = this.fieldHistory.findIndex(function(element) {
      return element === item;
    });

    if (index === -1) {
      this.fieldHistory.push(item);
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
 
  // signUp(){
  //   this.serv.Aprovrl().subscribe(res =>{
  //     this.data =res;
  //     console.log(this.data)

  // }
  //   )
  // }
  get CDSID(){
    return this.approvalForm.get('CDSID') 
  }
  get role(){
     return this.approvalForm.get('role')
  }
  get Program(){
    return this.approvalForm.get('Program')
  }
  get Region(){
    return this.approvalForm.get('Region') 
  }
  get UserComment(){
    return this.approvalForm.get('UserComment')
  }
  get AdminComment(){
    return this.approvalForm.get('AdminComment')
  }
  // signUp(){
  //   this.http.post<any>('https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff' + 'user/predata?userName=GSUMANKU',this.approvalForm.value)
  //   .subscribe(res=>{
  //     console.log("1",this.approvalForm.value);
  //     alert("successFull");
  //     this.approvalForm.reset();
  //     this.route.navigate(['test2form']);
  //   },err=>{
  //     console.log("2",this.approvalForm.value);
  //     alert("Something Went Wrong");
  //   })
    
  // }
  
  


}
