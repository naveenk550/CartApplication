import { Component, OnInit,HostListener } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobile:boolean;
  productCount: number = 0;
  prod: any = [];
 
  constructor(public datas: DataService) { }

  ngOnInit() {
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }
    this.datas.messageSource.subscribe(
      res => {
        this.prod = res;
        this.productCount = this.prod.length;
      },
      error => console.log(error));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    if (event.target.innerWidth <= 400) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }
}
