import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TemplateService {
    constructor(private http: HttpClient) { }

    private url: string = 'http://localhost:8080/';

    getAllCategories(): Observable<any> {
        return this.http.get(`${this.url}partner/categories`);
    }

    getAllTemplates(categoryId: string): Observable<any> {
        return this.http.get(`${this.url}partner/categories/templates/${categoryId}`);
    }

    getTemplateById(templateId: string): Observable<any> {
        return this.http.get(`${this.url}fetch`);
    }

    saveTemplate(templateInfo): Observable<any> {
        return this.http.post(`${this.url}partner/templates/add`, JSON.stringify(templateInfo));
    }
}
