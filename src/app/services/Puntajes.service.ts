import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/Icharacter';

@Injectable({
  providedIn: 'root',
})
export class PuntajeService {
  private _band = 0;
  private contadorIntentos: number = 0;
  private score: number = 0;
  private _firstCharacter: string = '';
  private _secondCharacter: string = '';
  private _firstCharacterhtml: any = '';
  private _secondCharacterhtml: any = '';

  public get firstCharacterhtml(): any {
    return this._firstCharacterhtml;
  }
  public set firstCharacterhtml(value: any) {
    this._firstCharacterhtml = value;
  }
  public get secondCharacterhtml(): any {
    return this._secondCharacterhtml;
  }
  public set secondCharacterhtml(value: any) {
    this._secondCharacterhtml = value;
  }

  constructor() {}

  public get firstCharacter(): string {
    return this._firstCharacter;
  }
  public set firstCharacter(value: string) {
    this._firstCharacter = value;
  }
  public get secondCharacter(): string {
    return this._secondCharacter;
  }
  public set secondCharacter(value: string) {
    this._secondCharacter = value;
  }

  public get band() {
    return this._band;
  }
  public set band(value) {
    this._band = value;
  }

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
