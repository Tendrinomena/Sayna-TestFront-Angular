import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService) { }
  public card !: Card;
  ngOnInit(): void {
  }

  getCard(id: number): Card{
      return this.cardService.getCardById(id);
  }
}
