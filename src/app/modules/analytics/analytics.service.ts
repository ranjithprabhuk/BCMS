import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AnalyticsService {
    constructor(private http: HttpClient) { }

    private url: string = 'http://localhost:8002/';

    getAnalyticsInfo(): any {
        return this.http.get(`${this.url}campaign/analytics?fromDate=2019-12-13`).toPromise()
        .then(data=> Promise.resolve(data))
        .catch(err => Promise.resolve(err));
    }
}
