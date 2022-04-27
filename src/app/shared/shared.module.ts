import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhonePipe } from './pipes/phone.pipe';
import { HomeComponent } from './home/components/home/home.component';
import { PageHomeComponent } from './home/pages/page-home/page-home/page-home.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhonePipe,
    HomeComponent,
    PageHomeComponent    
    ],
  imports: [
    CommonModule
    ],
  
  exports: [
    HeaderComponent,
    FooterComponent,
    PhonePipe,
    HomeComponent,
    PageHomeComponent
  ]
  
})
export class SharedModule { }
