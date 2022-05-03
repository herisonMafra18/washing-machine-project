import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumersDetailsComponent } from './features/costumers/pages/page-costumers-details/costumers-details.component';
import { PageCostumersComponent } from './features/costumers/pages/page-costumers/page-costumers.component';
import { PageLoginComponent } from './features/login/pages/page-login/page-login.component';
import { PageRegisterComponent } from './features/login/pages/page-register/page-register.component';
import { PageProductsComponent } from './features/products/pages/page-products/page-products.component';
import { PageScheduleComponent } from './features/schedule/page/page-schedule/page-schedule.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PageHomeComponent } from './shared/home/pages/page-home/page-home/page-home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: PageHomeComponent},
  { path: 'login', component: PageLoginComponent},
  { path: 'register', component: PageRegisterComponent},
  { path: 'products', component: PageProductsComponent, canActivate: [AuthGuard]},
  { path: 'agendamento', component: PageScheduleComponent, canActivate: [AuthGuard]},
  { path: 'costumers', component: PageCostumersComponent, canActivate: [AuthGuard]},
  { path: 'costumers-details/:id', component: CostumersDetailsComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
