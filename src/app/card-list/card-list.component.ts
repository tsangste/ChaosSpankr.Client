import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card';


@Component({
  moduleId: module.id,
  selector: 'app-card-list',
  templateUrl: 'card-list.component.html',
  styleUrls: ['card-list.component.css'],
  directives:[CardComponent]
})
export class CardListComponent implements OnInit {
  cards: Array<number> = [1, 2, 3, 5, 8, 13];
  constructor() {}

  ngOnInit() {}

  cardChoosen(card){
    console.log(card);
  }
}
