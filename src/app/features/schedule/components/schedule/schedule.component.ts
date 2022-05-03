import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostumersModel } from 'src/app/features/costumers/components/models/costumers-list.model';
import { CostumersService } from 'src/app/features/costumers/services/costumers-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(
    private activedRoute: ActivatedRoute,
    private costumerService: CostumersService
  ) { }

  costumers?: CostumersModel;

  ngOnInit(): void {
  }

}
