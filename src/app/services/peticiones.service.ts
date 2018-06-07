import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subscriber } from 'Rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

//Interfaces
//import { Profesor } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  private serverUrl: String = "https://jsonplaceholder.typicode.com/";
  public headers = null;
  public data = null;
  constructor(private http: Http) { 
  }
  

  // async getDatafromServerFeo(): Promise<any>{
  //   const response = await this.http.get('http://localhost:3333/response',{headers: this.headers}).toPromise()
  //   return response.json()
  // }

  // getDatafromServerFeo(): Observable<any>{
  //   return this.http.get('http://localhost:3333/response',{})
  // }

  getData(data):Observable<any>{
    return this.http.get(this.serverUrl + data,{})
  }

  newElement(uri, data):Observable<any>{
    return this.http.post(this.serverUrl + uri, data)
  }

  deleteElement(data):Observable<any>{
    return this.http.delete(this.serverUrl + data)
  }

}
