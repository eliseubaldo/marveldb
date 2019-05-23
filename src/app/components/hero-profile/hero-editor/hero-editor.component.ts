import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { find } from 'lodash';


@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss']
})
export class HeroEditorComponent implements OnInit {

  @Input() hero: any;
  @Input() affiliatedGroups: any;

  heroProfile = this.fb.group({
    heroName: ['', Validators.required],
    heroRealName: [''],
    heroPicture: [''],
    heroGroups: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {
  }


ngOnInit() {
  if (this.hero) {
    this.heroProfile.patchValue({
      heroName: this.hero.name,
      heroRealName: this.hero.realname,
      heroPicture: this.hero.picture
    });
  }
  this.addAffiliatedGroupsCheckbox();
}

  private addAffiliatedGroupsCheckbox() {
    this.affiliatedGroups.map(( o , i ) => {
      const isSelected = this.hero['affiliated-group'].some(g => g.name === o.name);
      const control = new FormGroup({
        name: new FormControl(o.name),
        selected: new FormControl(isSelected)
      });
      (this.heroProfile.controls.heroGroups as FormArray).push(control);
    });
  }

  checkGroup(group) {
    const found = find(this.hero['affiliated-group'], ['name', group]);
    return !found ? false : true;
  }

  onSubmit() {
    const onlySelectedHeroes = (this.heroProfile.get('heroGroups') as FormArray).controls
    .filter(ctrl => ctrl.value.selected)
    .map(data => data.value.name);
    alert(this.heroProfile.value);
  }


}
