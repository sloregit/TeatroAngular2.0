import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { spettacolo, prenotazioni } from '../app.component';

export class nuovoSpettacolo implements spettacolo {
  nomeSpettacolo: string;
  prenotazioni;
  constructor(nomeSpettacolo) {
    this.nomeSpettacolo = nomeSpettacolo;
  }
  //genera un nuovo spettacolo vuoto con nome
  genera(
    filePlatea: number,
    postiPlatea: number,
    filePalco: number,
    postipalco: number
  ) {
    return {
      nomeSpettacolo: <string>this.nomeSpettacolo,
      teatro: {
        platea: Array(filePlatea)
          .fill('fila')
          .map(() =>
            Array(postiPlatea)
              .fill('posto')
              .map((val, posto) => {
                return undefined;
              })
          ),
        palco: Array(filePalco)
          .fill('fila')
          .map(() =>
            Array(postipalco)
              .fill('posto')
              .map((val, posto) => {
                return undefined;
              })
          ),
      },
    };
  }
}
@Component({
  selector: 'app-gestore-spettacoli',
  templateUrl: './gestore-spettacoli.component.html',
  styleUrls: ['./gestore-spettacoli.component.css'],
})
export class GestoreSpettacoliComponent implements OnInit {
  @Input() arrayNomeSpettacoli;
  @Input() conferma: string;
  @Output() arrayNomeSpettacoliChange = new EventEmitter();
  @Output() nuovoSpettacoloEmitter = new EventEmitter();
  nomeSpettacolo = new FormControl<string>('');
  showOld: boolean = false;
  filePlatea: number = 1;
  postiPlatea: number = 1;
  filePalco: number = 1;
  postiPalco: number = 1;
  elementiPlatea: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  elementiPalco: number[] = [1, 2, 3, 4, 5, 6];
  nuovoSpettacolo;
  constructor() {}
  //crea un nuovo spettacolo e genera il teatro vuoto
  confermaSpettacoli() {
    this.nuovoSpettacolo = new nuovoSpettacolo(
      this.nomeSpettacolo.value
    ).genera(
      this.filePlatea,
      this.postiPlatea,
      this.filePalco,
      this.postiPalco
    );
    this.arrayNomeSpettacoli.push(this.nuovoSpettacolo.nomeSpettacolo);
    this.arrayNomeSpettacoliChange.emit(this.arrayNomeSpettacoli);
    this.nuovoSpettacoloEmitter.emit(this.nuovoSpettacolo);
  }

  ngOnInit() {}
}
