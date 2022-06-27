import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})

//Se il posto non è prenotato lo seleziona, altrimenti restituisce il nome della prenotazione
export class PulsanteComponent implements OnInit {
  @Input() posto: string;
  @Input() nome: string;
  @Input() prenotabile: boolean;
  @Output() prenotabileChange = new EventEmitter<boolean>();
  @Output() selezionatoEmitter = new EventEmitter<boolean>();
  @Output() nomePostoEmitter = new EventEmitter<string>();
  selezionato: boolean = false;
  constructor() {}
  select() {
    this.nomePostoEmitter.emit(this.posto);
    //se è inserito è possibile prenotare
    if (this.nome !== undefined && this.nome.length > 0) {
      this.prenotabile = true;
      this.prenotabileChange.emit(this.prenotabile);
      //se il posto è libero e viene cliccato viene selezionato
      if (this.posto === 'x') {
        this.selezionato === true
          ? (this.selezionato = false)
          : (this.selezionato = true);
      }
      this.selezionatoEmitter.emit(this.selezionato);
    } else {
      this.prenotabile = false;
      this.prenotabileChange.emit(false);
      //alert('inserisci un nome');
    }
  }
  ngOnInit() {}
}
