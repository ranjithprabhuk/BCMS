import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AnalyticsService {
    constructor(private http: HttpClient) { }

    private url: string = 'http://localhost:8080/';

    getAnalyticsInfo(): Observable<any> {
        return this.http.get(`${this.url}analytics/categories`);
    }
}
