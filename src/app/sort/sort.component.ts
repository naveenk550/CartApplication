import { Component, OnInit, HostListener } from '@angular/core';
import { SortFilterService } from '../services/sort-filter.service';
import {NgbdModalSort} from './modal-sort';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  mobile:boolean;
  constructor(private sortFilter : SortFilterService) { }




  ngOnInit() {
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }
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
  sortHigh(){
    this.sortFilter.sendSort('high');
  }
  sortLow(){
    this.sortFilter.sendSort('low');
  }
  sortDiscount(){
    this.sortFilter.sendSort('Discount');
  }
}
