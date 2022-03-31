import { Component, OnInit } from '@angular/core';
import { CardItemModel } from 'src/app/verticalcards/card-item.model';
import { Cards1Service } from 'src/app/verticalcards/cards1.service';

@Component({
  selector: 'chegg-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(private ps:Cards1Service) { }

  ngOnInit(): void {
  }

  addCard(card:CardItemModel) {
    console.log("You presed add Card");
    console.log(card);
    this.ps.addCard(card);

  }

}
