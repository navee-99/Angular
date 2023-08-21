import {generalInspectionReport } from './generalInspectionReport';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GeneralInspectionServiceService {
  apiURL = 'https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff';
  constructor(private http:HttpClient) {

   }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  fetchGeneralInspection(fetchInput: any): Observable<generalInspectionReport> {
    return this.http
      .post<generalInspectionReport>(
        this.apiURL + '/geninspt/predata',
        JSON.stringify(fetchInput),
        this.httpOptions
      )
      .pipe( catchError(this.handleError));


}
handleError(error: any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}
}
