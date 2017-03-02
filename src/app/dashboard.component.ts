import { Component, OnInit } from '@angular/core';
import { Crime } from './crime';
import { CrimeService } from './crime.service';

@Component ({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

	Crimes: Crime[] = [];

	constructor (private heroService: CrimeService) {}

	ngOnInit(): void {

		this.heroService.getCrimes().then(crimes => this.Crimes = crimes.slice(1, 15));
	}
}