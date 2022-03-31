import { Component, OnInit } from '@angular/core';
import { CardItemModel } from 'src/app/verticalcards/card-item.model';

@Component({
  selector: 'chegg-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addCard(card:CardItemModel) {
    console.log("You presed add Card");
    console.log(card);

  }

}
