import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Mezzi } from './Models/driving.model';
import { HttpClient } from '@angular/common/http';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { RentModel } from './Models/rent.model';
import { RentedComponent } from './rented/rented.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DrivingListComponent,RentedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'correzioneA';
  loading!: boolean
  obs! : Observable<Mezzi[]>
  data! : object
  http: HttpClient
  vettMezzi: Mezzi[] = []
  vettRent: RentModel[] = []


  constructor(http: HttpClient){this.http = http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Mezzi[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi')
    this.obs.subscribe(this.getData)
  }

  getData = (d: Mezzi[]) => {
    this.vettMezzi = d
    console.log(this.vettMezzi)
  
  }

  ngOnInit(): void {
    this.makeChiamata()
  }
}
