import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IBuyOffserviceService {
  httOption={
    head: new HttpHeaders({
      'content -type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  addAproveurl:string='https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff/user/requestUserSearch?userName=GSUMANKU';

addAprovrl(){
  return this.http.get(this.addAproveurl,{responseType:'json'}).pipe(catchError(this.errors))
}
modifyaprovelurl:string='https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff/user/modifyUser';
modifyaprovel(data:any){

  return this.http.post(this.modifyaprovelurl,data).pipe(catchError(this.errors))
}
Denyaddaprovelurl:string='https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff/user/denyUser';
Denyaddaprovel(data:any){

  return this.http.post(this.Denyaddaprovelurl,data).pipe(catchError(this.errors))
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
