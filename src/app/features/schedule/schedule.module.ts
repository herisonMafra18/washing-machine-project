import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { PageScheduleComponent } from './page/page-schedule/page-schedule.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleListComponent,
    PageScheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ScheduleComponent,
    ScheduleListComponent
  ]
})
export class ScheduleModule { }
