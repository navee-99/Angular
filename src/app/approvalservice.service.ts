import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApprovalserviceService {
  httOption={
    head: new HttpHeaders({
      'content -type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  Aproveurl:string='https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff/user/requestUserSearch?userName=GSUMANKU';

  Aprovrl(){
  return this.http.get(this.Aproveurl,{responseType:'json'}).pipe(catchError(this.errors))
}
Denyurl:string='https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff/user/denyUser';

  deny(data:any){
  return this.http.get(this.Aproveurl,data).pipe(catchError(this.errors))
}
Aprovedurl:string='https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff/user/approveUser';

  Aproved(data:any){
  return this.http.get(this.Aproveurl,data).pipe(catchError(this.errors))
}
errors(error :HttpErrorResponse){
  let errormsg='';
  if(error.error instanceof ErrorEvent){
    errormsg='Error cl'+ error.error.message; 
  }else{
    errormsg='Error se'+ error.error.message;
  }
  return throwError(errormsg);

 }
}
