import { Component, OnInit } from '@angular/core';
import { MarveldataService } from '../../services/marveldata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit {

  hero$: object;
  editing = '';
  editHero$: object;

  constructor(private data: MarveldataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.hero$ = params.id);
  }

  ngOnInit() {
    this.data.getHero(this.hero$).subscribe(
      data => this.hero$ = data
    );
  }

  edit(editType) {
    if (editType === 'current') {
      this.editHero$ = { ...this.hero$ };
    } else {
      this.newHero();
    }

    return editType === 'new' ? this.editing = 'new' : this.editing = 'current';
  }

  newHero() {
    this.editHero$ = {};
    this.data.getAffiliatedGroups().subscribe (
      data => this.editHero$['affiliated-group'] = data
    );
  }

}
