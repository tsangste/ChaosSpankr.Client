import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waitingroom',
  templateUrl: './waitingroom.component.html',
  styleUrls: ['./waitingroom.component.css']
})
export class WaitingRoomComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.router.navigate(['/cards']);
    }, 5000);
  }

}
