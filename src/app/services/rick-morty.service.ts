import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICharacter } from '../interfaces/Icharacter';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private https: HttpClient) {}

  getInitCharacters() {
    return this.https.get<ICharacter>(environment.apiUrl + 'character/');
  }

  getCharacters(page: number) {
    return this.https.get<ICharacter>(
      environment.apiUrl + 'character/?page=' + page
    );
  }
}
