import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostumersService } from 'src/app/features/costumers/services/costumers-service.service';

@Component({
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  

}
