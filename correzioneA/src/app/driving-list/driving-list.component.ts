import { Component, Input } from '@angular/core';
import { Mezzi } from '../Models/driving.model';

@Component({
  selector: 'app-driving-list',
  standalone: true,
  imports: [],
  templateUrl: './driving-list.component.html',
  styleUrl: './driving-list.component.css'
})
export class DrivingListComponent {
  @Input() mezz! : Mezzi

  noleggia(nNoleggia : HTMLInputElement){
    console.log(" Tipo: " + this.mezz.tipo + " Descrizione: " + this.mezz.descrizione + " Tariffa: " + this.mezz.tariffa + " ValutazioneMedia: " + this.mezz.valutazionemedia + " Noleggi: " + nNoleggia.value)

  }
}
