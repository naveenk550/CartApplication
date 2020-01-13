import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataService } from './services/data.service';
import { SortFilterService } from './services/sort-filter.service';
import { DesktopComponent } from './home/desktop/desktop.component';
import { MobileComponent } from './home/mobile/mobile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalBasic} from './filter/modal';
import {NgbdModalSort} from './sort/modal-sort';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    CartComponent,
    FilterComponent,
    SortComponent,
    ProductListComponent,
    DesktopComponent,
    MobileComponent,
    NgbdModalBasic,
    NgbdModalSort
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng5SliderModule,
    NgbModule
  ],
  providers: [DataService, SortFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
