import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { Result } from 'src/app/interfaces/Icharacter';
import { PuntajeService } from 'src/app/services/Puntajes.service';

@Component({
  selector: 'app-com-memory-card',
  templateUrl: './com-memery-card.component.html',
  styleUrls: ['./com-memery-card.component.css'],
})
export class ComMemeryCardComponent implements OnInit {
  @Input()
  character: any;
  public image: string = 'https://cdn.wallpapersafari.com/30/28/o4zghK.jpg';

  constructor(private servicePuntaje: PuntajeService) {}

  ngOnInit(): void {}

  Press = (data: any) => {
    if (this.servicePuntaje.band == 0) {
      this.servicePuntaje.firstCharacter = this.character.id;
      this.servicePuntaje.firstCharacterhtml = data;

      this.servicePuntaje.band++;
    } else {
      this.servicePuntaje.secondCharacter = this.character.id;
      this.servicePuntaje.secondCharacterhtml = data;

      this.checkPairs();
    }

    this.servicePuntaje.setContadorIntentos =
      this.servicePuntaje.getcontadorIntentos + 1;

    this.animate(data, 500);
    data.src = this.character.image;
  };

  error = (data: any) => {
    if (this.servicePuntaje.getcontadorIntentos == 2) {
      setTimeout(() => {
        // alert('Perdiste');

        data.src = 'https://cdn.wallpapersafari.com/30/28/o4zghK.jpg';
        this.animate(data, 500);
      }, 1000);
    }
  };

  checkPairs = () => {
    if (
      this.servicePuntaje.firstCharacter == this.servicePuntaje.secondCharacter
    ) {
      setTimeout(() => {
        // alert('Felicidades Ganaste');
      }, 1000);
      this.servicePuntaje.firstCharacter = '';
      this.servicePuntaje.secondCharacter = '';
      this.servicePuntaje.setScore = this.servicePuntaje.getScore + 1;
    } else {
      setTimeout(() => {
        // alert('Perdiste');
        this.servicePuntaje.firstCharacterhtml.src = this.image;
        this.servicePuntaje.secondCharacterhtml.src = this.image;
        this.servicePuntaje.setScore = this.servicePuntaje.getScore - 1;
      }, 500);
    }
    this.servicePuntaje.band = 0;
  };

  animate = (data: any, time: number) => {
    data.classList.add('animate__animated', 'animate__flipInY');
    setTimeout(() => {
      data.classList.remove('animate__animated', 'animate__flipInY');
    }, time);
  };
}
