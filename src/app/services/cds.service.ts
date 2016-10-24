import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CdsService {
    private cdUrl = 'https://quiet-plains-77265.herokuapp.com/cd';

    constructor(private http: Http) {
    }

    getCds(): Promise<any[]> {
        return this.http.get(this.cdUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getCd(cdId: String): Promise<any[]> {
        return this.http.get(`${this.cdUrl}/${cdId}`)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}