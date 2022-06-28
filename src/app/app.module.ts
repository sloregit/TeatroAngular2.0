import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppDataService } from './appdata.service';
import { TeatroComponent } from './teatro/teatro.component';
import { ZonaTeatroComponent } from './zona-teatro/zona-teatro.component';
import { PulsanteComponent } from './pulsante/pulsante.component';
import { GestoreSpettacoliComponent } from './gestore-spettacoli/gestore-spettacoli.component';
import {SelezioneComponent} from './gestore-spettacoli/selezione/selezione.component'
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    TeatroComponent,
    ZonaTeatroComponent,
    PulsanteComponent,
    GestoreSpettacoliComponent,
    SelezioneComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AppDataService],
})
export class AppModule {}
