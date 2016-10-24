import {CdsService} from '../services/cds.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.scss']
})
export class CdsComponent implements OnInit {

  private cds = [];
  
  constructor(private cdsService: CdsService) { }

  ngOnInit() {
    this.cdsService.getCds().then(data => this.cds = data);
  }

}
