import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class SessionService {

    constructor(private http: Http) {}

    checkSession(sessionId: string): Observable<any> {
        let address = 'http://0.0.0.0:3000';
        return this.http.get(`${address}?sessionId=${sessionId}`);
    }

}
