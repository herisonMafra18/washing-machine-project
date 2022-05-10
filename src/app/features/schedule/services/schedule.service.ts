import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ScheduleModel } from '../components/models/schedule.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {

  schedule: Array<ScheduleModel> = [
    {
      date: '06/06/2022',
      time: '15:30',
    },
    {
      date: '13/06/2022',
      time: '20:00',
    },
    {
      date: '20/06/2022',
      time: '10:00',
    }
  ];

  constructor() {}

  getAllSchedule() {
    return this.schedule;
  }

  getDefaultSchedule(): ScheduleModel {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      date: '',
      time: ''
    };


  }

  createSchedule(schedule: ScheduleModel) {
    this.schedule.push(schedule);
    return this.schedule;
  }

  removeByDate(date: string) {
    const productIndex = this.schedule.findIndex((schedule) => schedule.date === date);
    return this.schedule.splice(productIndex, 1);
  }

  getScheduleByDateTime(date: string | undefined, time: string | undefined) {
    return this.schedule.find((schedule) => schedule.date === date && schedule.time === time);
  }
}
