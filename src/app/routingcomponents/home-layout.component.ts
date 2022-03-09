import { Component } from "@angular/core";
import { CardItemModel } from "../verticalcards/card-item.model";
import { mock_card2_list } from "../verticalcards/mock_card2_list";
import { mock_card_list } from "../verticalcards/mock_card_list";

@Component({
    selector: 'chegg-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    cards: CardItemModel [] = [];
    card2s: CardItemModel [] = [];
  
    constructor() {
      for (var card of mock_card_list) {
        console.log(card)
        this.cards.push(card);
      }
  
      for (var card of mock_card2_list) {
        console.log(card)
        this.card2s.push(card);
      }
    }
}