import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostumersModel } from '../../components/models/costumers-list.model';
import { CostumersService } from '../../services/costumers-service.service';

@Component({
  templateUrl: './costumers-details.component.html',
  styleUrls: ['./costumers-details.component.scss']
})
export class CostumersDetailsComponent implements OnInit {

  costumers?: CostumersModel; 

  constructor(
    private activedRoute: ActivatedRoute,
    private costumerService: CostumersService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.costumers = this.costumerService.getById(params['id']); 
    })

  }

}
