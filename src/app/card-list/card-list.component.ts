import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Array<number> = [1, 2, 3, 5, 8, 13];

  constructor() {}

  ngOnInit() {}

  cardChosen(card) {
    console.log(card);
  }

}
