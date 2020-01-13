import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchON: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showHideSearch(){
    this.searchON = !this.searchON;
  }

  sarchProductList(){
    alert("search product..");
  }

}
