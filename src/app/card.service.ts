import { Injectable } from '@angular/core';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  cards : Card[] = [{
    type: "master",
    amount: 1242.42,
    reference_id: "5495 7381 3759 2321",
    expire_date: "04/24"
  },
  {
    type: "visa",
    amount: 249.00,
    reference_id: "4535 8933 1673 6770",
    expire_date: "05/25"
  },
  {
    type: "corporate",
    amount: 249.00,
    reference_id: "5363 7205 7398 4138",
    expire_date: "01/25"
  }];

  getCard(type: string): Card{
    return this.cards.find((card)=>card.type==type) as Card;
  }

}
