import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmsService {
    private filmUrl = 'https://quiet-plains-77265.herokuapp.com/film';

    constructor(private http: Http) {
    }

    getFilms(): Observable<any[]> {
        return this.http.get(this.filmUrl)
            .map(reponse => reponse.json());
    }

    getFilm(filmId: String): Observable<any[]> {
        return this.http.get(`${this.filmUrl}/${filmId}`)
            .map(reponse => reponse.json());
    }
}
