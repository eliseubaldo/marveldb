import { Component, OnInit } from '@angular/core';
import { MarveldataService } from '../../services/marveldata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-villains-list',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.scss']
})
export class VillainsListComponent implements OnInit {

  villains: any;
  constructor(private data: MarveldataService) { }

  ngOnInit() {
    this.data.getVillains().subscribe( data => this.villains = data );
  }

}
