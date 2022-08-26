import { Component, Input, OnInit } from '@angular/core';
import { PuntajeService } from 'src/app/services/Puntajes.service';

@Component({
  selector: 'app-com-memory-card',
  templateUrl: './com-memery-card.component.html',
  styleUrls: ['./com-memery-card.component.css'],
})
export class ComMemeryCardComponent implements OnInit {
  @Input()
  character: any = {};
  public image: string = 'https://cdn.wallpapersafari.com/30/28/o4zghK.jpg';
  constructor(private servicePuntaje: PuntajeService) {}

  ngOnInit(): void {}
  Press = (data: any) => {
    this.servicePuntaje.setContadorIntentos =
      this.servicePuntaje.getcontadorIntentos + 1;
    if (this.character.id == data.id) {
      this.servicePuntaje.setScore = this.servicePuntaje.getScore + 10;
    }
    console.log(this.servicePuntaje.getcontadorIntentos);
    if (this.servicePuntaje.getcontadorIntentos == 2) {
      setTimeout(() => {
        // alert('Perdiste');
        this.servicePuntaje.setContadorIntentos = 0;
        data.src = 'https://cdn.wallpapersafari.com/30/28/o4zghK.jpg';
        this.animate(data, 500);
      }, 1000);
    }
    this.animate(data, 500);
    data.src = this.character.image;
  };

  animate = (data: any, time: number) => {
    data.classList.add('animate__animated', 'animate__flipInY');
    setTimeout(() => {
      data.classList.remove('animate__animated', 'animate__flipInY');
    }, time);
  };
}
