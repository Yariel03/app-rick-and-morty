import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/Icharacter';

@Injectable({
  providedIn: 'root',
})
export class PuntajeService {
  private contadorIntentos: number = 0;
  private score: number = 0;
  constructor() {}

  get getcontadorIntentos() {
    return this.contadorIntentos;
  }
  set setContadorIntentos(value: number) {
    this.contadorIntentos = value;
  }
  get getScore() {
    return this.score;
  }
  set setScore(value: number) {
    this.score = value;
  }
}
