import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payments: Payment[]= [{
    id: 1,
    state: "Awaiting",
    number: "8",
  },
  {
    id: 2,
    state: "In Progress",
    number: "5",
  },
  {   id: 3,
    state: "Completed",
    number: "12",
  },
  {   id: 4,
    state: "Canceled",
    number: "4",
  }
];
  constructor() { }

  getAllPayment(){
    return this.payments;
  }
}
