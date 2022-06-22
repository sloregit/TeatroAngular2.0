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
  teatro: prenotazioni;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  login: boolean = false;
  admin: boolean = false;
  prenotazioni: datiIn;
  spettacoli = new Array();
  spettacoloScelto: string;
  nomeInserito: string;
  constructor(private AppDataService: AppDataService) {}

  //richiamata al change del <select>, restituisce il nome dello spettacolo
  numeraSpettacolo($event) {
    console.log($event.target.value);
    this.spettacoloScelto = $event.target.value;
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
  getPrenotazioni(admin) {
    this.admin = admin;
    this.login = true;
    this.AppDataService.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.prenotazioni = JSON.parse(res);
        for (let elem in this.prenotazioni) {
          this.spettacoli.push(this.prenotazioni[elem].nomeSpettacolo);
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
    console.log(this.prenotazioni);
  }
  mostraPrenotazioni() {}
}
