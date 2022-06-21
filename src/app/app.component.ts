import { Component, VERSION } from '@angular/core';
import { AppDataService } from './appdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private AppDataService: AppDataService) {}
  mostraPrenotazioni() {
    this.AppDataService.getPrenotazioni$().subscribe({
      next: (res: string) => {
        console.log(res);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
