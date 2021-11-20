import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  allPayments!: Payment[];
  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.allPayments = this.paymentService.getAllPayment();
  }

}
