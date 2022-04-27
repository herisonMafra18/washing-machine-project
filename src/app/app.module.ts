import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CostumersModule } from './features/costumers/costumers.module';
import { LoginModule } from './features/login/login.module';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ScheduleComponent } from './features/schedule/components/schedule/schedule.component';
import { PageScheduleComponent } from './features/schedule/page/page-schedule/page-schedule.component';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    PageScheduleComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CostumersModule,
    ProductsModule,
    LoginModule,
    
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
