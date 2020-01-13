import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  mobile:boolean;
    constructor() { }

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
}



