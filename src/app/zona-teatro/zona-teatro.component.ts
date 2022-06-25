import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { prenotazioni } from '../app.component';

export class Prenotazione {
  nome: string;
  fila: number;
  posto: number;
  constructor(nome: string, fila: number, posto: number) {
    this.nome = nome;
    this.fila = fila;
    this.posto = posto;
  }
}

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
  @Output() prenotazioniChange = new EventEmitter<Array<string>>();
  selezionato;
  selezionati: PrenotazioneMultipla;
  nuovaPrenotazione: Prenotazione;
  constructor() {}
  selezionatoChange($event) {
    console.log($event);
  }
  prenota(fila, posto) {
    console.log(this.selezionato);
    if (this.rapido) {
      this.prenotazioni[fila][posto] = this.nome;
      this.prenotazioniChange.emit(this.prenotazioni);
    } else {
      if (this.selezionati === undefined) {
        this.selezionati = new PrenotazioneMultipla();
      } else {
        this.nuovaPrenotazione = new Prenotazione(this.nome, fila, posto);
        this.selezionati.aggiungi(this.nuovaPrenotazione);
      }
    }
  }
  ngOnInit() {}
}
