import {LivresService} from '../services/livres.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {

  livres = [];

  constructor(private livresService: LivresService) { }

  ngOnInit() {
    this.livresService.getLivres().then(data => this.livres = data);
  }

}
