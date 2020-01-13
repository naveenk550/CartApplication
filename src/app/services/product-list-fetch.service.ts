import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductListFetchService {
  apiURL: string = 'https://api.myjson.com/bins/qzuzi';
  completeProdList: any = [];
  constructor(private httpClient: HttpClient) {}

  getProducts(){
    return this.httpClient.get<ProcessingInstruction[]>(`${this.apiURL}`);
  }

  setProduct(data){
    this.completeProdList = data;
  }

  getProductList(){
    return this.completeProdList;
  }
}
