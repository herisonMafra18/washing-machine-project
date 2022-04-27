import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostumersModel } from 'src/app/features/costumers/components/models/costumers-list.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  costumer?: CostumersModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const costumerStorage = sessionStorage.getItem('costumer');
    if(costumerStorage) {
      this.costumer = JSON.parse(costumerStorage);
    }
  }

navigateByUrl(url: string) {
  this.router.navigateByUrl(url);
}

exit() {
  sessionStorage.clear();
  this.navigateByUrl('/login');
}

}
