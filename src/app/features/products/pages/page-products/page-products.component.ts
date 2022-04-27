import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss']
})
export class PageProductsComponent implements OnInit {

  dateProducts: Date = new Date();

  phone = '41998849134';

  constructor() { }

  ngOnInit(): void {
  }

}
