import { Injectable } from '@angular/core';
import { CostumersModel } from '../components/models/costumers-list.model';
import * as moment from 'moment';

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
      email: 'herison@teste.com',
      password: '1234'
    },
    {
      id: 2,
      name: 'Angela Busato',
      apartment: 203,
      block: 'B',
      email: 'angela@teste.com',
      password: '1234'
    },
    {
      id: 3,
      name: 'Paulo',
      apartment: 210,
      block: 'B',
      email: 'paulo@teste.com',
      password: '1234'
    },
    {
      id: 4,
      name: 'Mateus',
      apartment: 127,
      block: 'A',
      email: 'mateus@teste.com',
      password: '1234'
    }
  ];

  getDefaultCostumer(): CostumersModel {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      id: this.generateId(),
      name: '',
      apartment: 0,
      block: '',
      email: '',
      password: ''
    }
  }

  getAllCostumers() {
    return this.costumers;
  }

  getCostumersByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.costumers.find((costumers) => costumers.email === email && costumers.password === password);
  }

  getById(id: number) {
  return this.costumers.find((costumers) => costumers.id == id);
  }

  getCostumerByName(name: string) {
    return this.costumers.find((costumer) => costumer.name === name);
  }

  getCostumersByFilterName(name: string) {
    return this.costumers.filter((costumer) => costumer.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getStudentsByFilterId(id: number) {
    const costumer = this.getById(Number(id));
    if(!costumer) {
      return [];
    }
    return [costumer];
  }  

  generateId(): number {
    return this.costumers[(this.costumers.length - 1)].id + 1;
  }

  createCostumer(costumer: CostumersModel) {
    this.costumers.push(costumer);
    return this.costumers;
  }

  constructor() { }
}
