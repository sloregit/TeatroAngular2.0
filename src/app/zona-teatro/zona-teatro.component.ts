import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { prenotazioni } from '../app.component';

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
  selezionato: boolean;
  constructor() {}
  prenota(fila, posto) {
    if (this.rapido) {
      this.prenotazioni[fila][posto] = this.nome;
      this.prenotazioniChange.emit(this.prenotazioni);
    } else {
      this.selezionato == true ? false : true;
    }
  }
  ngOnInit() {}
}
