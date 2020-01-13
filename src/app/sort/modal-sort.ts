import {Component} from '@angular/core';
import { SortFilterService } from '../services/sort-filter.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-sort',
  templateUrl: './modal-sort.html'
})
export class NgbdModalSort {
  closeResult: string;
  selectSort : any;
  constructor(private modalService: NgbModal, private sortFilter : SortFilterService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = ``;
    }, (reason) => {
      this.closeResult = ``;
    });
  }

  radioChange(event:any){
    this.selectSort = event.target.id;
    
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  sortMethod(form){
    if(this.selectSort === 'high'){
      this.sortHigh(this.selectSort);
    }
    else if(this.selectSort === 'low'){
     this.sortLow(this.selectSort);
    }
    else{
      this.sortDiscount(this.selectSort);
    }
  }
  sortHigh(self){
    this.sortFilter.sendSort('high');
  }
  sortLow(self){
    this.sortFilter.sendSort('low');
  }
  sortDiscount(self){
    this.sortFilter.sendSort('Discount');
  }
}