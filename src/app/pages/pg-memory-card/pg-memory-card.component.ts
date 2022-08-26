import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/Character.service';
import { RickMortyService } from 'src/app/services/rick-morty.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pg-memory-card',
  templateUrl: './pg-memory-card.component.html',
  styleUrls: ['./pg-memory-card.component.css'],
})
export class PgMemoryCardComponent implements OnInit {
  private pages: number = 0;
  private totalRes: number = 0;
  public lstCharacters: any[] = [];
  constructor(
    private swApi: RickMortyService,
    public characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.getInitCharacters();
  }

  getInitCharacters() {
    return this.swApi.getInitCharacters().subscribe((data) => {
      let pageRandom = Math.floor(Math.random() * data.info.pages);
      this.pages = pageRandom == 0 ? 1 : pageRandom;
      this.getCharacters();
    });
  }

  getCharacters() {
    this.swApi.getCharacters(this.pages).subscribe((data) => {
      this.totalRes = data.results.length - 1;
      this.getRandomCharacter(5);
    });
  }

  getRandomCharacter(repeat: number = 3) {
    for (let i = 0; i <= repeat; i++) {
      let random = Math.floor(Math.random() * this.totalRes);
      this.swApi
        .getCharacters(this.pages)
        .pipe(finalize(this.sorteo))
        .subscribe((data) => {
          this.lstCharacters.push(data.results[random]);
          this.lstCharacters.push(data.results[random]);
        });
    }
  }

  sorteo = () => {
    this.characterService.dataCharacter = this.lstCharacters.sort(
      () => Math.random() - 0.5
    );
  };
}
