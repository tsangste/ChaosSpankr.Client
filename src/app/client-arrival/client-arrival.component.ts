import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-client-arrival',
  templateUrl: 'client-arrival.component.html',
  styleUrls: ['client-arrival.component.css']
})
export class ClientArrivalComponent implements OnInit {

    name: string;
    sessionId: string;

  constructor(private router: Router) { }

  ngOnInit() {
      this.name = '';
      this.sessionId = '';
  }

  login(){
      console.log(this.name);
      console.log(this.sessionId);
      this.router.navigate(['/cards']);
  }

}
