import { Component, OnInit } from "@angular/core";
import { CardItemModel } from "../verticalcards/card-item.model";
import { Cards1Service } from "../verticalcards/cards1.service";
import { mock_card2_list } from "../verticalcards/mock_card2_list";
import { mock_card_list } from "../verticalcards/mock_card_list";

@Component({
  selector: 'chegg-home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  cards: CardItemModel[] = [];
  card2s: CardItemModel[] = [];

  constructor(private cards1Service:Cards1Service) {
    for (var card of mock_card2_list) {
      console.log(card)
      this.card2s.push(card);
    }
  }

  ngOnInit(): void {
    this.cards1Service.getCards().subscribe((data: CardItemModel []) => {
      for (var card of data) {
        this.cards.push(card);
      }
    });
  }
}