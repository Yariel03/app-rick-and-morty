import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/Character.service';
import { RickMortyService } from 'src/app/services/rick-morty.service';
import { finalize } from 'rxjs/operators';
import { PuntajeService } from 'src/app/services/Puntajes.service';
import Swal from 'sweetalert2';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-pg-memory-card',
  templateUrl: './pg-memory-card.component.html',
  styleUrls: ['./pg-memory-card.component.css'],
})
export class PgMemoryCardComponent implements OnInit {
  private pages: number = 0;
  private totalRes: number = 0;
  public lstCharacters: any[] = [];
  public tiempo = 5;
  constructor(
    private swApi: RickMortyService,
    public characterService: CharacterService,
    public servicePuntaje: PuntajeService
  ) {}

  ngOnInit(): void {
    this.getInitCharacters();
    this.tick();
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
    // this.characterService.dataCharacter = this.lstCharacters;

    //PRUEBA:desconmentar pa sorteo
    this.characterService.dataCharacter = this.lstCharacters.sort(
      () => Math.random() - 0.5
    );
  };

  tick = () => {
    const timer = setInterval(() => {
      if (this.tiempo <= 0) {
        this.tiempo = 0;
        Swal.fire({
          title: 'Perdiste',
          text: 'Inténtalo de nuevo',
          icon: 'error',
          confirmButtonText: 'Resultados',
          allowOutsideClick: false,
          cancelButtonColor: '#d33',
          cancelButtonText: 'Intentar de nuevo',
          showCancelButton: true,
          showConfirmButton: true,
        }).then((result) => {
          if (result.value) {
            this.tiempo = 5;
            this.tick();
          } else {
            this.tiempo = 5;

            this.tick();
          }
        });

        clearInterval(timer);
      } else {
        this.tiempo--;
      }
    }, 1000);
  };
  //   setInterval(() => {
  //     if (this.tiempo <= 0) {
  //       this.tiempo = 0;
  //       Swal.fire({
  //         title: 'Perdiste',
  //         text: 'Intentalo de nuevo',
  //         icon: 'error',
  //         confirmButtonText: 'Aceptar',
  //       });
  //     } else {
  //       this.tiempo--;
  //       clearInterval();
  //     }
  //   }, 1000);
  // };
}
