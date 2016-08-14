import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { GlobalSettingsService } from './globalSettings.service';

@Injectable()
export class SessionService {
  config;
  constructor(private http: Http, private globalSettingsService: GlobalSettingsService ) {
    this.config = globalSettingsService.get();
  }

  create(){
    return this.http.post(`${this.config.apiUrl}/sessions`, {});
  }

  get(sessionId: string): Observable<any> {
    return this.http.get(`${this.config.apiUrl}?sessionId=${sessionId}`);
  }

  end(sessionId: string){
    return this.http.delete(`${this.config.apiUrl}/sessions/${sessionId}`);
  }

  setStatus(sessionId: string, state: string){
    return this.http.put(`${this.config.apiUrl}/sessions/${sessionId}`, {'state': state});
  }

  addUser(sessionId: string, userId: string){
    return this.http.put(`${this.config.apiUrl}/sessions/${sessionId}/user`, {
      'userId': userId
    });
  }

}
