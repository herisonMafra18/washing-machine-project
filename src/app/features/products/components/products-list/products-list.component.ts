import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from './models/products-list.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {



  messageErro = false;

  productsItem1: Array<ProductModel> = this.productService.getAllProducts();


  filterProducts: Array<ProductModel> = this.productsItem1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

filterProduct(event: any) { 
  this.messageErro = false;
  const searchValue = event.target.value;
  if (searchValue.length > 0) {
    this.filterProducts = this.productService.getProductByDescription(searchValue);
    
    if (this.filterProducts.length === 0) this.messageErro = true;
    return this.filterProducts;
}
  return this.filterProducts = this.productsItem1;
}

}
