import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostumersModel } from '../models/costumers-list.model';


@Component({
  selector: 'app-costumers-card',
  templateUrl: './costumers-card.component.html',
  styleUrls: ['./costumers-card.component.scss']
})
export class CostumersCardComponent implements OnInit {


  @Input()
  costumers?: CostumersModel;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  removeToCostumer () {
    alert(`O morador ${this.costumers?.name} foi removido com sucesso`)
  }

  productDetails (id: number) {
    this.router.navigateByUrl(`/costumers-details/${id}`);
  }

  // bottonCheck () {
    // if (this.costumers) {
      // this.costumers.check = !this.costumers.check;
    // }
    
  }



