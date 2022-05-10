import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumersListComponent } from './components/costumers-list/costumers-list.component';
import { CostumersCardComponent } from './components/costumers-card/costumers-card.component';
import { PageCostumersComponent } from './pages/page-costumers/page-costumers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CostumersDetailsComponent } from './pages/page-costumers-details/costumers-details.component';




@NgModule({
  declarations: [
    CostumersListComponent,
    CostumersCardComponent,
    PageCostumersComponent,
    CostumersDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [
    CostumersListComponent,
    CostumersCardComponent,
    PageCostumersComponent
  ]
})
export class CostumersModule { }
