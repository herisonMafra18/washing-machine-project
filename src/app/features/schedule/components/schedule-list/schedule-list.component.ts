import { Component, Input, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { ScheduleModel } from '../models/schedule.model';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) { }

  schedule: Array<ScheduleModel> = this.scheduleService.getAllSchedule();

  filterSchedule: Array<ScheduleModel> = this.schedule;

  ngOnInit(): void {
  }

}
