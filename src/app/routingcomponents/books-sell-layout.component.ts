import { Component } from "@angular/core";
import { CardItemModel } from "../verticalcards/card-item.model";
import { mock_card4_list } from "../verticalcards/mock_card4_list";

@Component ({
 selector: 'chegg-books-sell-layout',
 templateUrl: 'books-sell-layout.component.html',
 styleUrls: ['books-sell-layout.component.css']
})
export class BooksSellLayoutComponent {
    card4s: CardItemModel [] = [];

    constructor() {
    
        for (var card of mock_card4_list) {
          console.log(card)
          this.card4s.push(card);
        }
      }
}