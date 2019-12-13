import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TemplateService {
    constructor(private http: HttpClient) { }

    private url: string = 'http://localhost:8080/'

    getAllTemplates(): Observable<any> {
        return this.http.get(`${this.url}fetch`);
    }

    getTemplateById(templateId: string): Observable<any> {
        return this.http.get(`${this.url}fetch`);
    }

    saveTemplate(templateInfo): Observable<any> {
        return this.http.post(`${this.url}fetch`, templateInfo);
    }
}
