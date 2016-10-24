import {FilmsService} from '../services/films.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  private films = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getFilms().subscribe(data => this.films = data);
  }

}
