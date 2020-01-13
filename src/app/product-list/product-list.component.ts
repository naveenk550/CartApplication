import { Component, OnInit, AfterViewInit,ElementRef, ViewChild } from '@angular/core';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductListFetchService } from '../services/product-list-fetch.service';

import { DataService } from '../services/data.service';
import { SortFilterService } from '../services/sort-filter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
@NgModule({
  imports: [
    HttpClientModule
  ]
})

export class ProductListComponent implements AfterViewInit,OnInit {
  products:any = [];
  prod:any = [];
  message:string;
  items:any = [];
  sortFilterId:string;
  filterId:any = [];

  constructor(public rest:ProductListFetchService, private datas: DataService , private sortFilter : SortFilterService) { }

  ngOnInit() {
   
    this.getProducts();
    this.datas.messageSource.subscribe(
      res => this.prod = res,
      error => console.log(error)
    );
   
    
  }

  ngAfterViewInit() {
    this.sortFilter.messageSourceId.subscribe(
      
      (res: any) => {
       
        this.sortFilterId = res; 
        if(this.sortFilterId === 'high'){
          this.sortDataHL(this.products);
        }
        else if(this.sortFilterId === 'low')
        {
          this.sortDataLH(this.products);
        }
        else{
          this.sortDataDiscount(this.products);
        }
      },
      error => {console.log(error)}
    );

    this.sortFilter.filterID.subscribe(
      
      (res: any) => {
       
        this.filterId['min'] = res.min;
        this.filterId['max'] = res.max;  
        this.products=  this.filterData(this.filterId,this.products);
      },
      error => {console.log(error)}
    );
  }
  getProducts() {
    this.products = [];
    this.prod = [];
    this.rest.getProducts().subscribe((data: {}) => {
     this.products = this.sortDataLH(data);
     this.rest.setProduct(this.products);  
    });
  }
  addToCart(item){
    
    this.prod.push(item);
    this.datas.changeMessage(this.prod);
  }

  sortDataHL(items){
   return items.sort((a,b) => {
    if (a.price -  (a.price * a.discount)/100 < b.price -  (b.price * b.discount)/100) return 1;
    else if (a.price -  (a.price * a.discount)/100 > b.price -  (b.price * b.discount)/100) return -1;
    else return 0;
  });
  }

  sortDataLH(items){
    return items.sort((a,b) => {
     if (a.price -  (a.price * a.discount)/100 < b.price -  (b.price * b.discount)/100) return -1;
     else if (a.price -  (a.price * a.discount)/100 > b.price -  (b.price * b.discount)/100) return 1;
     else return 0;
   });
   }

   sortDataDiscount(items){
    return items.sort((a,b) => {
     if ( a.discount <  b.discount) return -1;
     else if ( b.discount >  b.discount) return 1;
     else return 0;
   });
   }

   filterData(values,items){
     let completeProductList = this.rest.getProductList();
    return  completeProductList.filter(
      item => (item.price > values.min && item.price < values.max) );
   }

   
}
