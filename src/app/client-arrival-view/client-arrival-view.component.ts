import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-arrival-view',
  templateUrl: './client-arrival-view.component.html',
  styleUrls: ['./client-arrival-view.component.css']
})
export class ClientArrivalViewComponent implements OnInit {

  @Input() name: string;
  @Input() sessionId: string;
  @Output() loginEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  login() {
    this.loginEvent.emit();
  }

}
