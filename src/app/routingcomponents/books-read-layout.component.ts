import { Component } from "@angular/core";
import { CardItemModel } from "../verticalcards/card-item.model";
import { mock_card3_list } from "../verticalcards/mock_card3_list";

@Component ({
 selector: 'chegg-books-read-layout',
 templateUrl: 'books-read-layout.component.html',
 styleUrls: ['books-read-layout.component.css']

})

export class BooksReadLayoutComponent {
    card3s: CardItemModel [] = [];

    constructor() {
    
        for (var card of mock_card3_list) {
          console.log(card)
          this.card3s.push(card);
        }
      }
}