import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Login } from './model/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public urlApi = 'http://localhost:9000';//dev public

  private currentUserSubject: BehaviorSubject<Login>;

  public currentUser: Observable<Login>;

  constructor(private http: HttpClient) { 

    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public get currentUserValue(): Login {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  /** POST **/
  loginSgs(params: Login): Observable<Login> {
      // console.log(JSON.stringify(hero));
      // console.log(this.urlApi + 'getUsers')
        return this.http.post<any>(this.urlApi + 'apis/login', JSON.stringify(params), httpOptions)
        // return this.http.get<any>(this.urlApi + 'partner/companies', {})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    const data = user;
                    console.log(data);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    this.currentUserSubject.next(data);
                }

                return user;
            }));
  }

  logout() {

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    
  }
}
