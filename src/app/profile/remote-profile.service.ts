import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireDatabaseModule, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AboutMe, Projects } from '../../assets/shared/siteData';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PortfolioInterface } from '../../assets/shared/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class RemoteProfileService {
  // Base url
   baseurl = 'http://localhost:3000';
   fbURL: any;
  private firebaseUrl = 'https://paragsalbardeportfolio-default-rtdb.firebaseio.com';
  //baseurl = 'C:/dev/portfolio/src/assets/shared/portfolioData.json';
  // public dataFirebase: Observable<any>[];
  // allPortfolios: Observable<Portfolio[]>;
  // singlePortfolio: Observable<Portfolio>;

  constructor(private http: HttpClient, private db: AngularFirestore) { 
    // this.allPortfolios = this.http.get<any>(this.baseurl + '/projects/${id}')
    // const allfbData : AngularFireList<any> = afdb.list('dataFirebase');
    // allfbData.valueChanges().subscribe(
    //   x => {this.dataFirebase =x}
    // )
  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // getFirebaseData(): Observable<any> {
  //   this.fbURL = `${this.firebaseUrl}`;
  //   console.log('Fetching From Firebase:', this.fbURL)
  //   return this.http.get<any>(this.fbURL);
  // }
  // GET
  getRemoteAboutInfo(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + '/about_me/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getRemoteProjects(): Observable<any> {
    console.log('Fetching From Firebase:', this.fbURL)
    return this.http
      .get<any>(this.baseurl + '/projects/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getRemoteProject(id: number): Observable<any> {
    console.log("I am running on Click NOW")
    return this.http.get<any>(this.baseurl + `/projects/${id}`)
      .pipe(retry(1), catchError(this.errorHandl));
      
  }

  getRemoteEducation(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + '/educationData/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  getRemoteExperience(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + '/exprienceData/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getRemoteExtraCircularInfo(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + '/extraCircularInfo/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getRemoteURL(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + '/socialURLs/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getRemoteDocURL(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + '/docURLs/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  getRemoteSkills(): Observable<any> {
    return this.http
      .get<any>(this.baseurl + '/skills/')
      .pipe(retry(1), catchError(this.errorHandl));
  }


   // Error handling
   errorHandl(error: any) {
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
