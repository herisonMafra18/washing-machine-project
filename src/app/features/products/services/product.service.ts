import { Injectable } from '@angular/core';
import { ProductModel } from '../components/products-list/models/products-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsItem1: Array<ProductModel> = [
    {
      id: 2,
      description: 'Sabão em Pó - OMO',
      price: 2.70,
      img: 'https://a-static.mlcdn.com.br/618x463/sabao-em-po-800g-omo-lavagem-perfeita/supriagora/1169276-1169370/83b7e04630a1b7096f15faae2f81824d.jpg',
      quantily: 3,
      inclusionDate: new Date()
    },
    {
      id: 3,
      description: 'Sabão em Pó - Tixan',
      price: 3.70,
      img: 'https://apoioentrega.vteximg.com.br/arquivos/ids/457983/98162.jpg?v=637249119171100000',
      quantily: 2,
      inclusionDate: new Date()
    },
    {
      id: 4,
      description: 'Sabão em Pó - Surf',
      price: 4.70,
      img: 'https://http2.mlstatic.com/D_NQ_NP_732278-MLA44494896413_012021-O.jpg',
      quantily: 4,
      inclusionDate: new Date()
    },
    {
      id: 5,
      description: 'Sabão em Pó - Confort',
      price: 5.70,
      img: 'https://farmaciaindiana.vteximg.com.br/arquivos/ids/245979/7891150066571_99_5_1200_72_RGB.jpg?v=637685439033330000',
      quantily: 0,
      inclusionDate: new Date()
    }  
  ];

  constructor() { }

  getAllProducts() {
    return this.productsItem1;
  }

  getById(id: number) {
    this.productsItem1.find((productsItem1) => productsItem1.id === id);
  }

  getProductByDescription(description: string) {
    return this.productsItem1.filter(
      (product) => product.description.toUpperCase().search(description.toUpperCase()) > -1);
  }

  removeById(id: number) {
    const productIndex = this.productsItem1.findIndex((productsItem1) => productsItem1.id === id);
    return this.productsItem1.splice(productIndex, 1);
  }
}
