import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Planet } from '../model/planet';
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  planetsUrl = '../assets/json/planets.json';

  constructor( private http: HttpClient ) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetsUrl);
  }
}