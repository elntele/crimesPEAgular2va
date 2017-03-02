import { Component, OnInit } from '@angular/core';
import { Crime } from'./crime';
import { CrimeService } from './crime.service';

@Component({
  selector: 'Crimes',
  template: `
  <h2>Crimes</h2>
  <ul class=heroes>
  	<li *ngFor = "let crime of crimes" [class.selected]="crime === selectedCrime" (click) = "onSelect(crime)">
  		<span class="badge">{{crime.id}}</span> {{crime.nome_vitima}} 
  	</li>
  </ul>
  <my-crime-detail [crime]="selectedCrime"></my-crime-detail> `
 
})
export class CrimesComponent implements OnInit { 
	crimes : Crime [];
 	selectedCrime: Crime;

  constructor (private CrimeService: CrimeService) {}

  getCrimes() : void {

    this.CrimeService.getCrimes().then(crimes => this.crimes = crimes);
  }

  ngOnInit() : void {

    this.getCrimes();
  }

 	onSelect(crime: Crime): void{
 		this.selectedCrime = crime;
 	}
 }
