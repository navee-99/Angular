import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DieInspectionDataIssuesStaticDynamicServiceService {
  apiURL ='https://buyoffexternal.apps.pd01e.edc2.cf.ford.com/BuyOff';
  constructor(private http:HttpClient) { }

  fetchIssueDataStatic(data:any){
    return this.http.post(this.apiURL+'/report/gethistdie',data).pipe(
    catchError(this.handleError)
    );
  }

  fetchIssueDataDynamic(data1:any){
    return this.http.post(this.apiURL+'/report/gethistdie',data1).pipe(
    catchError(this.handleError)
    );
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
