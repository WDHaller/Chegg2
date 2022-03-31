import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chegg-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addCard() {
    console.log("You presed add Card")
  }

}
