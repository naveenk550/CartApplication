import { Component, OnInit, HostListener } from '@angular/core';
import { Options } from 'ng5-slider';
import { SortFilterService } from '../services/sort-filter.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import {NgbdModalBasic} from './modal';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  mobile:boolean;
  values: any = [];
  selectedMin: any = 100;
  selectedMax: any = 1000;
  options: Options = {
    floor: 100,
    ceil: 1000
  };
  
  constructor(private sortFilter : SortFilterService) { }

  ngOnInit() {
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }
  }

  filterProducts(){
    this.values['min'] = this.selectedMin;
    this.values['max'] = this.selectedMax;
    this.sortFilter.sendFilter(this.values);
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
