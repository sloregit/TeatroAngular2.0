import { Component, VERSION } from '@angular/core';
import { AppDataService } from './appdata.service';

export interface datiIn {
  prenotazioni: string;
  teatro: Teatro;
}
export interface prenotazioni {
  platea: Array<string>;
  palco: Array<string>;
}
export class Teatro {
  nomeSpettacolo: string;
  nomePrenotazione: string;
  prenotazioni: prenotazioni;
  rapido: boolean;
  constructor(nomePrenotazione, nomeSpettacolo, prenotazioni, rapido) {
    this.nomePrenotazione = nomePrenotazione;
    this.nomeSpettacolo = nomeSpettacolo;
    this.prenotazioni = prenotazioni;
    this.rapido = rapido;
  }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  login: boolean = false;
  admin: boolean = false;
  datiIn: datiIn;
  spettacoli = new Array();
  teatro: Teatro;
  //
  spettacoloScelto: string;
  nomeInserito: string;
  constructor(private AppDataService: AppDataService) {}

  //richiamata al change del <select>, restituisce il nome dello spettacolo
  numeraSpettacolo($event) {
    console.log($event.target.value);
    console.log(typeof $event.target.value);
    this.spettacoloScelto = $event.target.index;
  }
  //il valore del campo input
  inInput($event) {
    this.nomeInserito = $event.target.value;
  }
  indietro() {
    this.login = false;
    this.spettacoli = [];
  }
  //richiede le prenotazioni e costruisce l'array con i nomi degli spettacoli
  getDati(admin) {
    this.admin = admin;
    this.login = true;
    this.AppDataService.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.datiIn = JSON.parse(res);
        for (let elem in this.datiIn) {
          this.spettacoli.push(this.datiIn[elem].nomeSpettacolo);
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
    console.log(this.datiIn);
  }
  mostraPrenotazioni(rapido) {
    if (rapido) {
      //this.teatro =  new Teatro(this.nomeInserito,this.numeraSpettacolo,this.datiIn[])
    }
  }
}
