import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

// import { aboutMe, projects } from '../../assets/shared/siteData';
// import * form '../../assets/shared/portfolioData.json.json';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Base url
  // baseUrl = 'http://localhost:3000';
   baseUrl = '../../assets/shared/portfolioData.json';

  
  constructor( private http: HttpClient ) {   }
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
    // GET
  
    // GetNewInfo() {
    //   return this.http.get<any>(this.baseUrl + '/about_me');
    // }
  // START: DATA

  // GET
  getAboutMeInfo(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/about_me/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getProjects(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/projects/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getProject(id: number): Observable<any> {
    console.log("I am running on Click NOW")
    return this.http.get<any>(this.baseUrl + `/projects/${id}`)
      .pipe(retry(1), catchError(this.errorHandl));
      
  }

  getEducationInfo(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/educationData/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  getExperience(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/exprienceData/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getExtraCircularInfo(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/extraCircularInfo/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getURL(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/socialURLs/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getDocURL(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/docURLs/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  getSkills(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/skills/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  
  // END: DATA
  // Error handling
  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
