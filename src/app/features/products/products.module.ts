import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsCardComponent,
    PageProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ProductsModule { }
