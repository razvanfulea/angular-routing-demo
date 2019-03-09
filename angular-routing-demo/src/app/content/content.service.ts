import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './content';

@Injectable()
export class ContentService{
    private contentUrl = 'api/contents';

    constructor(private http: HttpClient) {}

    getContents(): Observable<Content[]>{
        return this.http.get<Array<Content>>(this.contentUrl);
    }

    getContent(id: number|string): Observable<Content>{
        const url = `${this.contentUrl}/${id}`;
        return this.http.get<Content>(url);
    }

    save(content: Content){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const url = `${this.contentUrl}/${content.id}`;
        return this.http.put<Content>(url, content, {headers: headers});
    }

}