import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { prenotazioni } from '../app.component';

export class PrenotazioneMultipla {
  selezionati;
  constructor() {
    this.selezionati = [];
  }
  aggiungi(prenotazione) {
    this.selezionati.push(prenotazione);
  }
  rimuovi(fila: number, posto: number) {
    this.selezionati.map((old, i) => {
      if (old.fila === fila && old.posto === posto) {
        this.selezionati.splice(i, 1);
      }
    });
  }
}

@Component({
  selector: 'app-zona-teatro',
  templateUrl: './zona-teatro.component.html',
  styleUrls: ['./zona-teatro.component.css'],
})
export class ZonaTeatroComponent implements OnInit {
  @Input() prenotazioni;
  @Input() nome;
  @Input() rapido;
  @Output() prenotazioniChange = new EventEmitter();
  selezionato: boolean = false;
  selezionati: PrenotazioneMultipla;
  constructor() {}
  prenota(fila, posto) {
    console.log(this);
    if (this.rapido) {
      this.prenotazioni[fila][posto] = this.nome;
      this.prenotazioniChange.emit(this.prenotazioni);
    } 
  }
  ngOnInit() {}
}
