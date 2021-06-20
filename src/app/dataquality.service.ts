import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
//import { Headers, RequestOptions } from '@angular/http';
import { Http, Response,ResponseContentType } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataqualityModel } from '../model/dataquality.model';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {map, startWith,switchMap,debounceTime } from 'rxjs/operators';

@Injectable()
export class DataqualityService {
  //localhost
  /*baseURL='http://localhost:1337/shippingScorecard/';
  downloadURL='C://tmp//';*/

 // C3 Dev for IDQ QA portal
  /*baseURL='https://idq-qa.corp.ebay.com:8080/shippingScorecard/';
  downloadURL='https://idq-qa.corp.ebay.com:8080/downloads/';*/

  // IDQ prod in C3 EAZ
  baseURL='https://idq.corp.ebay.com:8080/shippingScorecard/';
  downloadURL='https://idq.corp.ebay.com:8080/downloads/';
  
 
  constructor(private httpClient: HttpClient,
              private http: Http) { }

  getDQRecord(dqId){
    let url = this.baseURL + "FetchSelectedDQRecord";
     return this.httpClient.get(url + "?dqId="+dqId);
  }

  fetchRule(ruleId){
    let url = this.baseURL + "FetchSelectedRule";
     return this.httpClient.get(url + "?ruleId="+ruleId);
  }

  deleteRule(ruleId){
    let url = this.baseURL + "DeleteSelectedRule";
     return this.httpClient.delete(url + "?ruleId="+ruleId);
  }

  getRulesForSelectedDQ(dqId){
    let url = this.baseURL + "FetchRulesForSelectedDQ";
     return this.httpClient.get(url + "?dqId="+dqId);
  }

  getRuleCount(){
     let url = this.baseURL + "GetRuleCount";
     return this.httpClient.get(url);           
  }

  getReportData(selectedSA,selectedCluster){
     /*console.info(selectedSA+'......getReportData....'+selectedCluster);
     var cluster;
    if(selectedCluster==="Hercules")
        {
            cluster='sp2';
        }
        else{
            cluster='hd10';
        }*/
     let url = this.baseURL + "ReportData";
     return this.httpClient.get(url+"?selectedSA="+selectedSA+"&cluster="+selectedCluster);           
  }

  getMonthReportData(month: string){
     let url = this.baseURL + "ReportDataMonthDays";
     return this.httpClient.get(url+"?month="+month);           
  }


  getEntireConfigName(){
    let url = this.baseURL + "FetchAllConfigNames";
     return this.httpClient.get(url);   
  }

  getSelectedConfigName(dataFeedName: string,dqId: string): Observable<any> {

    let url = this.baseURL + "FetchSelectedConfigNames";
    console.info(dataFeedName+'......url....'+url);
    return this.http.get(url +"?dataFeedName="+dataFeedName+"&dqId="+dqId);
   //  return this.httpClient.get(url+ "?dataFeedName="+dataFeedName);   
  }

    getSelectedConfigNameCreate(dataFeedName: string): Observable<any> {

    let url = this.baseURL + "FetchSelectedConfigNamesCreate";
    console.info(dataFeedName+'......url....'+url);
    return this.http.get(url +"?dataFeedName="+dataFeedName);
   //  return this.httpClient.get(url+ "?dataFeedName="+dataFeedName);   
  }



  getAllRules(selectedSA){
     let url = this.baseURL + "FetchDQRecords";
     return this.httpClient.get(url+"?selectedSA="+selectedSA);           
  }

  getLookupRecords(){
     let url = this.baseURL + "FetchLookupRecords";
     return this.httpClient.get(url);           
  }

  insertTargetData(params: any): Observable<any[]> {
    return this.postData('DQTargetInsert', params);
  }

  updateTargetData(params: any): Observable<any[]> {
    return this.postData('DQTargetUpdate', params);
  }

  insertDQData(params: any): Observable<any[]> {
    return this.postData('DataQualityInsertConfig', params);
  }

  insertDQRules(params: any): Observable<any[]> {
    return this.postData('RulesInsertConfig', params);
  }

  updateDQRules(params: any): Observable<any[]> {
    return this.postData('UpdateRule', params);
  }

  private postData(method, params: DataqualityModel): Observable<any[]> {
    let url = this.baseURL + method;
    return this.httpClient.post<any>(url, params);
  }

  updateDQDate(params: any): Observable<any[]>
  {
    return this.postData('DataQualityUpdateConfig', params);
  }

  updateConfigStatus(dqId)
  {
    let url = this.baseURL + "UpdateConfigStatus";
     return this.httpClient.get(url + "?dqId="+dqId);           
  }

  deployFile(dqId)
  {
    let url = this.baseURL + "GenerateConfigFile";
     return this.httpClient.get(url + "?dqId="+dqId);           
  }

  downloadFile(targetTableName): Observable<any>{
    let url = this.downloadURL +targetTableName+ ".cfg"; 
    return this.http.get(url, { responseType: ResponseContentType.Blob });
  }

  getHeader() {
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return headers;
  }

  private extractData(res: Response, errorStatus = []) {

    if (res.status < 200 || res.status >= 300 || errorStatus.indexOf(res.status) > -1 )  {
      throw new Error('Bad Response status:' + res.status);
    }
    console.info(res['insertId']);
    let body = res.json();
     console.info(body)
    return body || {};
  }

  private handleError(error: any) {
    console.error('Insie error');
    console.error(error);
    let errMsg = error._body;
    return Observable.throw(errMsg);
  }

  makeIntentionalError() {
    return this.httpClient.get('not/a/real/url')
    .pipe(
      catchError(this.handleError)
      );
  }
}
