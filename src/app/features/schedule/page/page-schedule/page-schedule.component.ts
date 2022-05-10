import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleModel } from '../../components/models/schedule.model';
import { ScheduleService } from '../../services/schedule.service';


@Component({
  templateUrl: './page-schedule.component.html',
  styleUrls: ['./page-schedule.component.scss']
})
export class PageScheduleComponent implements OnInit {

schedule: ScheduleModel = this.scheduleService.getDefaultSchedule();

  constructor(
    private scheduleService: ScheduleService,
    private router: Router
  ) { }

  date?: string;
  time?: string;

  ngOnInit(): void {
  }

  onSubmit(scheduleForm: NgForm) {
    console.log(scheduleForm.value);

    const formValue = scheduleForm.value; 
    
    this.schedule.date = formValue.dateSchedule;
    this.schedule.time = formValue.timeSchedule;
    
    this.scheduleService.createSchedule(this.schedule);

    // alert ('Agendamento realizado com sucesso!');

    const schedule = this.scheduleService.getScheduleByDateTime(this.date, this.time);

    sessionStorage.setItem('schedule', JSON.stringify(schedule));
  }

}
