import { Component, OnInit } from '@angular/core';
import { MarveldataService } from '../../services/marveldata.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes: any;

  constructor(private data: MarveldataService) { }

  ngOnInit() {
    this.data.getHeroes().subscribe( data => this.heroes = data );
  }

}
