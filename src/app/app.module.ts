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

import { ScheduleModule } from './features/schedule/schedule.module';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CostumersModule,
    ProductsModule,
    LoginModule,
    ScheduleModule
    
    
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
