import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Planet } from 'src/app/model/planet';
import { PlanetsService } from 'src/app/service/planet.service';
@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit{
  planet:Planet | undefined;
  isSelected:string = '';
  planetDetails:any = {};
  constructor(private _route:ActivatedRoute, private _planetService:PlanetsService){}

  ngOnInit(){
    this._route.paramMap.subscribe((params:ParamMap) => {
      let planetName = params.get('name');
      this.getPlanet(planetName);
    })
  }

  getPlanet(planetName:any){
    this._planetService.getPlanets().subscribe( (response) => {
      this.planet = response.find(planet => planet.name.toLowerCase() === planetName.toLowerCase());
      console.log(this.planet);
    })
  }
  showDetails(info:string){
    this.isSelected = info;
    console.log(this.isSelected);
  }
}
