import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortFilterService {

   messageSourceId = new BehaviorSubject('');
  currentMessage = this.messageSourceId.asObservable();

  filterID = new BehaviorSubject('');
  currentfilterID = this.messageSourceId.asObservable();
  constructor() { }

 
  sendSort(id){
    this.messageSourceId.next(id)
  }
  sendFilter(values){
    this.filterID.next(values);
  }
}
