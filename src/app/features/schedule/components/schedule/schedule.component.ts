import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleModel } from '../models/schedule.model';
import { ScheduleService } from '../../services/schedule.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  
  @Input()
  schedule?: ScheduleModel;
  
  
    constructor(   
    private router: Router,
    private scheduleService: ScheduleService
  ) { }

  

  ngOnInit(): void {
  }


  removeDate() {
    if(this.schedule) this.scheduleService.removeByDate(this.schedule.date);
  }
}
