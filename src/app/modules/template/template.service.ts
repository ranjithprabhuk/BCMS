import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../../shared/shared.service';

@Injectable()
export class TemplateService {
    constructor(private http: HttpClient, private sharedService: SharedService) { }

    private url: string = 'http://localhost:8080/';

    getAllCategories(): Observable<any> {
        this.sharedService.show();
        return this.http.get(`${this.url}partner/categories`);
    }

    getAllTemplates(categoryId: string): Observable<any> {
        this.sharedService.show();
        return this.http.get(`${this.url}partner/categories/templates/${categoryId}`);
    }

    getTemplateById(templateId: string): Observable<any> {
        this.sharedService.show();
        return this.http.get(`${this.url}fetch`);
    }

    saveTemplate(templateInfo): Observable<any> {
        this.sharedService.show();
        return this.http.post(`${this.url}partner/templates/add`, JSON.stringify(templateInfo));
    }
}
