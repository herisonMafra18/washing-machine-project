import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CostumersModel } from 'src/app/features/costumers/components/models/costumers-list.model';
import { CostumersService } from 'src/app/features/costumers/services/costumers-service.service';

@Component({
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss']
})
export class PageRegisterComponent implements OnInit {
  
  costumer: CostumersModel = this.costumerService.getDefaultCostumer();

  constructor(
    private costumerService: CostumersService,
    private router: Router)
    { }

  ngOnInit(): void {
    console.log(this.costumer);
  }

  onSubmit(costumerForm: NgForm) {
    console.log(costumerForm.value);
    
    const formValue = costumerForm.value;
    
    this.costumer.name = formValue.name;
    this.costumer.apartment = formValue.apartment;
    this.costumer.block = formValue.block;
    this.costumer.email = formValue.email;
    this.costumer.password = formValue.password;
    this.costumerService.createCostumer(this.costumer);
    alert ('Morador adicionado com sucesso!');
    this.router.navigateByUrl('/login');

  }


}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

