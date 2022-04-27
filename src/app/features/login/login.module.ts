import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PageRegisterComponent,
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
    
  ]
})
export class LoginModule { }
