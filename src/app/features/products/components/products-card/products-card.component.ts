import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../products-list/models/products-list.model';


@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  @Input()
  discountPercent?: number;
  
  @Input()
  product?: ProductModel;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

addToCart () {
  alert(`O produto ${this.product?.description} foi adicionado ao carrinho`)
}

removeProduct() {
  if(this.product) this.productService.removeById(this.product.id);
}

}
