import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Http, Response,ResponseContentType } from '@angular/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {map, startWith,switchMap,debounceTime } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  baseURL='http://localhost:1337/Planet/';
  constructor(private httpClient: HttpClient,
              private http: Http) { }
  fetchPlanetData(planetDet){
    let url = this.baseURL + "ExternalApi";
     return this.httpClient.get(url + "?planetDet="+planetDet);
  }
		sendPlanetKeywords(keywords){
				console.log(keywords);
    let url = this.baseURL + "InsertKeywords";
    console.log(url + "?keywords="+"'" + keywords + "'")
     return this.httpClient.post(url + "?keywords="+ "'" + keywords + "'", keywords);
 }
 	fetchPlanetKeywords(){
				
    let url = this.baseURL + "PlanetKeywords";
    console.log(url)
     return this.httpClient.get(url);
 }
}
