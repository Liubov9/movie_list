import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  token = environment.apiKey;
  baseUrl = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  get(url: string, options?: any, params?: any): Observable<any> {
    return this.http
      .get(this.baseUrl + url, this.addHeaders(options, params))
      .pipe(catchError(this.handleError.bind(this))) as Observable<any>;
  }

   handleError(error: any): any {
    return console.log(error);
  }

   addHeaders(options?: any, params?: any): any {
    options = options || [];

    if (!options.headers) {
      options.headers = new HttpHeaders();
    }
 
      options.headers = options.headers.append('Authorization', 'Bearer ' + this.token);   
      options.headers = options.headers.append('Content-Type', 'application/json');

    if (params) {
      options.params = params;
    }

    return options;
  }
}
