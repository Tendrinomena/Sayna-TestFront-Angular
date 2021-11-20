import { Component } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'klamma';

  constructor(
    private cardService: CardService
  ){}
}
