import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
@Component({
  selector: 'app-sectionorders',
  templateUrl: './sectionorders.component.html',
  styleUrls: ['./sectionorders.component.css']
})
export class SectionordersComponent implements OnInit {

  orders: Order[] = [
      {
        id: 1,
        customer: {id: 1, name: 'cust', email: '@mail', state: 'MI'},
        amount: 20,
        placed: new Date(2017, 12, 1),
        fulfilled: new Date(2017, 12, 1)
      },
      {
        id: 2,
        customer: {id: 1, name: 'cust', email: '@mail', state: 'MI'},
        amount: 20,
        placed: new Date(2017, 12, 1),
        fulfilled: new Date(2017, 12, 1)
      },
      {
        id: 3,
        customer: {id: 1, name: 'cust', email: '@mail', state: 'MI'},
        amount: 20,
        placed: new Date(2017, 12, 1),
        fulfilled: new Date(2017, 12, 1)
      },
      {
        id: 4,
        customer: {id: 1, name: 'cust', email: '@mail', state: 'MI'},
        amount: 20,
        placed: new Date(2017, 12, 1),
        fulfilled: new Date(2017, 12, 1)
      },
  ];

  constructor() { }

  ngOnInit() {
  }

}
