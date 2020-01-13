import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  message:string;
  items : any = [];
  tempProductId: any = [];
  prod: any = [];
  overallPrice: number = 0;
  discountPrice: number = 0;
  totalPayPrice: number = 0;

  constructor(private datas: DataService) { }

  ngOnInit() {
    this.datas.messageSource.subscribe(
      res => {
        this.prod = res;
        this.calculateProductQuantity(res);
      },
      error => console.log(error));
  }

  calculateProductQuantity(productList){
    this.items = [];
    this.tempProductId = [];
    productList.forEach((item) => {
      if(this.tempProductId.indexOf(item.id) > -1){
        this.addProdQuantity(item);
      } else {
        item['quantity'] = 1;
        this.tempProductId.push(item.id);
        this.items.push(item);
      }
    })
    this.calculatePrice();
  }

  addProdQuantity(product){
    this.items.forEach((item, index) => {
      if(item.id == product.id){
        this.items[index]['quantity'] = this.items[index]['quantity'] + 1;
      }
    })
  }

  addToCart(item){
    delete item['quantity']; 
    this.prod.push(item);
    this.datas.changeMessage(this.prod);
    this.calculatePrice();
  }

  removeFromCart(item){
    // based on the item id, remove one item from this.prod
    for(var i=0; i<this.prod.length; i++){
      if(this.prod[i].id == item.id){
        this.prod.splice(this.prod.indexOf(this.prod[i]),1)
        break;
      }
    }
    this.prod.forEach((val, index) => {
      this.datas.changeMessage(this.prod);
    })
    this.calculatePrice();
  }

  calculatePrice(){
    this.overallPrice = 0;
    this.discountPrice = 0;
    this.totalPayPrice = 0;
    this.items.forEach((item, index) => {
      this.overallPrice = this.overallPrice + item.price*item.quantity;
      this.discountPrice = this.discountPrice + ((item.price * item.discount)/100)*item.quantity;
      this.totalPayPrice = this.overallPrice - this.discountPrice;
    });
  }
  

}
