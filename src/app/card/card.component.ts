import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardNumber: number;
  @Output() clickCard = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  chooseCard(element) {
    this.clickCard.emit(element);
  }

}
