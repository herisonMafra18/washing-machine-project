import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CostumersModel } from '../components/models/costumers-list.model';

@Injectable({
  providedIn: 'root'
})
export class CostumersService {

  costumers: Array<CostumersModel> = [
    {
      id: 1,
      name: 'Herison Mafra',
      apartment: 101,
      block: 'A',
      check: true,
      email: 'herison@teste.com',
      password: '1234'
    },
    {
      id: 2,
      name: 'Angela Busato',
      apartment: 203,
      block: 'B',
      check: false,
      email: 'angela@teste.com',
      password: '1234'
    },
    {
      id: 3,
      name: 'Paulo',
      apartment: 210,
      block: 'B',
      check: true,
      email: 'paulo@teste.com',
      password: '1234'
    },
    {
      id: 4,
      name: 'Mateus',
      apartment: 127,
      block: 'A',
      check: false,
      email: 'mateus@teste.com',
      password: '1234'
    }
  ];

  getAllCostumers() {
    return this.costumers;
  }

  getById(id: number) {
  return this.costumers.find((costumers) => costumers.id == id);
  }

  getCostumersByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.costumers.find((costumers) => costumers.email === email && costumers.password === password);
  }

  constructor() { }
}
