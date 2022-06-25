import { Component, OnInit, Input, Output } from '@angular/core';
import { Teatro } from '../app.component';

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
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  @Input() teatro: Teatro;
  @Input() prenotazioneMultipla: PrenotazioneMultipla;
  constructor() {}
  mostraNome(this) {
    console.log(this.value);
  }
  confermaPrenotazioni() {
    console.log(this.prenotazioneMultipla);
  }
  ngOnInit() {}
}

/**
 export class Teatro implements spettacolo {
  nomeSpettacolo: string;
  prenotazioni: prenotazioni;
  nomePrenotazione: string;
  rapido: boolean;
  constructor(nomePrenotazione, nomeSpettacolo, prenotazioni, rapido) {
    this.nomePrenotazione = nomePrenotazione;
    this.nomeSpettacolo = nomeSpettacolo;
    this.prenotazioni = prenotazioni;
    this.rapido = rapido;
  }
}
 */
