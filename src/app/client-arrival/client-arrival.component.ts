import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-client-arrival',
  templateUrl: './client-arrival.component.html',
  styleUrls: ['./client-arrival.component.css']
})
export class ClientArrivalComponent implements OnInit {

  name: string;
  sessionId: string;

  constructor(private router: Router, private sessionService: SessionService) {}

  ngOnInit() {
    this.name = '';
    this.sessionId = '';
  }

  login() {
    console.log(this.name);
    console.log(this.sessionId);
    this.sessionService
      .get(this.sessionId)
      .subscribe((result) => {
        if (result.status === 200) {
          console.log(true);
          this.router.navigate(['/waiting']);
          return;
        }

        console.log(false);
      });
  }

}
