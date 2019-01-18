import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarveldataService {

  headers = new HttpHeaders().set('x-apikey', '5c3f94b966292476821ca01e');

  constructor( private http: HttpClient ) { }

  getHeroes() {
    return this.http.get('https://marvelheroes-1d22.restdb.io/rest/heroes', {headers: this.headers});
    // return this.http.get('https://marvelheroes-1d22.restdb.io/rest/heroes?skip=10&max=10', {headers: this.headers});
  }

  getHero(heroId) {
    return this.http.get('https://marvelheroes-1d22.restdb.io/rest/heroes/' + heroId, {headers: this.headers});
  }

  getVillains() {
    return this.http.get('https://marvelheroes-1d22.restdb.io/rest/villains', {headers: this.headers});
  }

  getAffiliatedGroups() {
  return this.http.get('https://marvelheroes-1d22.restdb.io/rest/groups', {headers: this.headers});
  }
}
