import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumersDetailsComponent } from './features/costumers/pages/page-costumers-details/costumers-details.component';
import { PageCostumersComponent } from './features/costumers/pages/page-costumers/page-costumers.component';
import { PageLoginComponent } from './features/login/pages/page-login/page-login.component';
import { PageRegisterComponent } from './features/login/pages/page-register/page-register.component';
import { PageProductsComponent } from './features/products/pages/page-products/page-products.component';
import { PageScheduleComponent } from './features/schedule/page/page-schedule/page-schedule.component';
import { PageHomeComponent } from './shared/home/pages/page-home/page-home/page-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /* { path: '', component: PageProductsComponent }, */
  { path: 'products', component: PageProductsComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'register', component: PageRegisterComponent},
  { path: 'costumers', component: PageCostumersComponent},
  { path: 'costumers-details/:id', component: CostumersDetailsComponent},
  { path: 'costumers-details', component: CostumersDetailsComponent},
  { path: 'home', component: PageHomeComponent},
  { path: 'agendamento', component: PageScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
