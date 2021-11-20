import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../card.service';
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

  getCard(rang: number): Card{
    if(rang==1){
      return this.cardService.getCard("master");
    }else if(rang ==2){
      return this.cardService.getCard("visa");
    }else{
      return this.cardService.getCard("corporate");
    }
  }
}
