import { Component, VERSION } from '@angular/core';
import { AppDataService } from './appdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prenotazioni;
  spettacoli = new Array();
  constructor(private AppDataService: AppDataService) {
    this.AppDataService.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.prenotazioni = JSON.parse(res);
        console.log(res);
        console.log(this.prenotazioni);
        for (let i in this.prenotazioni)
          console.log(this.prenotazioni[i].nomeSpettacolo);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  mostraPrenotazioni() {
    console.log(this.prenotazioni);

    /*
    this.AppDataService.getPrenotazioni$().subscribe({
      next: (res: string) => {
        console.log(res);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });*/
  }
}
