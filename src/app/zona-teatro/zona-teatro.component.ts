import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prenotazione, PrenotazioneMultipla } from '../teatro/teatro.component';

@Component({
  selector: 'app-zona-teatro',
  templateUrl: './zona-teatro.component.html',
  styleUrls: ['./zona-teatro.component.css'],
})
export class ZonaTeatroComponent implements OnInit {
  @Input() prenotazioni;
  @Input() nome: string;
  @Input() rapido: boolean;
  @Input() selezionati: PrenotazioneMultipla;
  @Output() prenotazioniChange = new EventEmitter<Array<string>>();
  @Output() selezionatiChange = new EventEmitter<PrenotazioneMultipla>();
  selezionato: boolean;
  nuovaPrenotazione: Prenotazione;
  constructor() {}
  isSelezionato($event: boolean) {
    this.selezionato = $event;
  }

  //Se rapida, prenota il posto
  //altrimenti aggiunge la prenotazione alla prenotazione multipla
  prenota(fila: number, posto: number) {
    if (this.rapido) {
      this.prenotazioni[fila][posto] = this.nome;
      this.prenotazioniChange.emit(this.prenotazioni);
    } else {
      //crea una prenotazione multipla se non esiste e aggiunge la prima prenotazione
      if (this.selezionati === undefined) {
        this.selezionati = new PrenotazioneMultipla();
        this.nuovaPrenotazione = new Prenotazione(this.nome, fila, posto);
        this.selezionati.aggiungi(this.nuovaPrenotazione);
      } else {
        if (!this.selezionato) {
          this.selezionati.rimuovi(fila, posto);
        } else {
          this.nuovaPrenotazione = new Prenotazione(this.nome, fila, posto);
          this.selezionati.aggiungi(this.nuovaPrenotazione);
        }
      }
      this.selezionatiChange.emit(this.selezionati);
    }
  }

  ngOnInit() {}
}
