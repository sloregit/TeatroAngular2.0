import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { spettacolo, prenotazioni } from '../app.component';

@Component({
  selector: 'app-gestore-spettacoli',
  templateUrl: './gestore-spettacoli.component.html',
  styleUrls: ['./gestore-spettacoli.component.css'],
})
export class GestoreSpettacoliComponent implements OnInit {
  @Input() arrayNomeSpettacoli;
  @Output() arrayNomeSpettacoliChange = new EventEmitter();
  nomeSpettacolo = new FormControl<string>('');
  showOld: boolean = false;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  elementiPlatea: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  elementiPalco: number[] = [1, 2, 3, 4, 5, 6];
  constructor() {}
  confermaSpettacoli() {
    console.log(
      this.nomeSpettacolo.value,
      ['Platea', this.filePlatea, this.postiPlatea],
      ['Palco', this.filePalco, this.postiPalco]
    );
  }
  nomeSpettacoloInput($event) {
    console.log($event.target.value);
  }
  NewresetPrenotazioni() {
    const prenotazioni: object = {
      platea: Array(6)
        .fill('fila')
        .map(() =>
          Array(10)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
      palco: Array(4)
        .fill('fila')
        .map(() =>
          Array(4)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
    };
    const sale = [
      { nomeSpettacolo: 'spettacolo 1', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 2', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 3', teatro: prenotazioni },
    ];
    console.log(sale);
    /*this.AppDBservice.SetPrenotazioni$(JSON.stringify(sale)).subscribe(
      (val) => (this.conferma = 'Teatro resettato')
    );*/
  }
  ngOnInit() {}
}
