import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostumersService } from 'src/app/features/costumers/services/costumers-service.service';

@Component({
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  error: boolean = false;

  email?: string;
  password?: string;

  constructor(
    private costumerService: CostumersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  authenticate() {
    console.log(this.email, this.password); 
    const costumer = this.costumerService.getCostumersByEmailAndPassword(this.email, this.password);
    if (!costumer) {
      this.error = true;
    }
      else {
      delete costumer.password;
      
      sessionStorage.setItem('costumer', JSON.stringify(costumer));

      this.router.navigateByUrl('agendamento');
    }
  }

}
