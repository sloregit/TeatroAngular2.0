import { Component, VERSION } from '@angular/core';
import { last } from 'rxjs/operators';
import { AppDataService } from './appdata.service';

export interface spettacolo {
  nomeSpettacolo: string;
  prenotazioni: prenotazioni;
}
export interface prenotazioni {
  platea: Array<string>;
  palco: Array<string>;
}
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
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  login: boolean = false;
  admin: boolean = false;
  datiIn: Array<spettacolo>;
  teatro: Teatro;
  nomeInserito: string;
  //
  nomeSpettacolo: string;
  spettacoloScelto: string;
  arrayNomeSpettacoli: Array<string> = new Array();

  constructor(private AppDataService: AppDataService) {}

  //torna alla home, resetta i valori
  indietro() {
    this.login = false;
    this.arrayNomeSpettacoli = [];
    this.nomeInserito = undefined;
    this.spettacoloScelto = undefined;
  }
  //crea il teatro --> TeatroComponent
  generaTeatro(rapido) {
    this.teatro = new Teatro(
      this.nomeInserito,
      this.nomeSpettacolo,
      this.datiIn[this.spettacoloScelto].teatro,
      rapido
    );
    console.log(this.teatro);
  }
  //richiamata al change del <select>, assegna il nome e l'indice dello spettacolo
  numeraSpettacolo($event) {
    this.spettacoloScelto = $event.target.value;
    this.nomeSpettacolo = this.arrayNomeSpettacoli[$event.target.value];
  }

  //il valore del campo input
  inInput($event) {
    this.nomeInserito = $event.target.value;
  }
  //richiede le prenotazioni e costruisce l'array con i nomi degli spettacoli
  getDati(admin) {
    this.admin = admin;
    this.login = true;
    this.AppDataService.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.datiIn = JSON.parse(res);
        for (let elem in this.datiIn) {
          this.arrayNomeSpettacoli.push(this.datiIn[elem].nomeSpettacolo);
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
