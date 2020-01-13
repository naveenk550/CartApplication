import {Component} from '@angular/core';
import { Options } from 'ng5-slider';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SortFilterService } from '../services/sort-filter.service';


@Component({
  selector: 'ngbd-modal',
  templateUrl: './modal.html'
})
export class NgbdModalBasic {
  closeResult: string;
  values: any = [];
  selectedMin: any = 100;
  selectedMax: any = 1000;
  options: Options = {
    floor: 100,
    ceil: 1000
  };
  constructor(private modalService: NgbModal, private sortFilter : SortFilterService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = ``;
    }, (reason) => {
      this.closeResult = ``;
    });
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

  filterProducts(){
    this.values['min'] = this.selectedMin;
    this.values['max'] = this.selectedMax;
    this.sortFilter.sendFilter(this.values);
  }
}