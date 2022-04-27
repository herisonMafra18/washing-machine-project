import { Component, OnInit } from '@angular/core';
import { CostumersService } from '../../services/costumers-service.service';
import { CostumersModel } from '../models/costumers-list.model';

@Component({
  selector: 'app-costumers-list',
  templateUrl: './costumers-list.component.html',
  styleUrls: ['./costumers-list.component.scss']
})
export class CostumersListComponent implements OnInit {

  constructor(private costumersService: CostumersService) { }

  costumers: Array<CostumersModel> = this.costumersService.getAllCostumers();

  costumerFilter = this.costumers;

  ngOnInit(): void {
  }

  filterCostumer(event: any) {
    const searchValue = event.target.value;
    if (searchValue.length > 0) {
      return this.costumerFilter =
      this.costumers.filter((costumer) => costumer.name.toUpperCase().search(searchValue.toUpperCase()) >-1);
    }
    return this.costumerFilter = this.costumers
  }


}
