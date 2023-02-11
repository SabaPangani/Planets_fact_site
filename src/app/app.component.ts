import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from './model/planet';
import { PlanetsService } from './service/planet.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PlanetFacts';
  planets:Planet[] = [];
  constructor(private _route:ActivatedRoute, private _planetService:PlanetsService){}

  ngOnInit(){
    this._planetService.getPlanets().subscribe((data) => {
      this.planets = data;
    })
  }
}
