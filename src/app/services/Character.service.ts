import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/Icharacter';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private lstData: ICharacter[] = [];
  constructor() {}

  get dataCharacter() {
    return this.lstData;
  }

  set dataCharacter(value: ICharacter[]) {
    this.lstData = value;
  }
}
