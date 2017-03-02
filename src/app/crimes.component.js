"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var crime_service_1 = require('./crime.service');
var CrimesComponent = (function () {
    function CrimesComponent(CrimeService) {
        this.CrimeService = CrimeService;
    }
    CrimesComponent.prototype.getCrimes = function () {
        var _this = this;
        this.CrimeService.getCrimes().then(function (crimes) { return _this.crimes = crimes; });
    };
    CrimesComponent.prototype.ngOnInit = function () {
        this.getCrimes();
    };
    CrimesComponent.prototype.onSelect = function (crime) {
        this.selectedCrime = crime;
    };
    CrimesComponent = __decorate([
        core_1.Component({
            selector: 'Crimes',
            template: "\n  <h2>Crimes</h2>\n  <ul class=heroes>\n  \t<li *ngFor = \"let crime of crimes\" [class.selected]=\"crime === selectedCrime\" (click) = \"onSelect(crime)\">\n  \t\t<span class=\"badge\">{{crime.id}}</span> {{crime.nome_vitima}} \n  \t</li>\n  </ul>\n  <my-crime-detail [crime]=\"selectedCrime\"></my-crime-detail> "
        }), 
        __metadata('design:paramtypes', [crime_service_1.CrimeService])
    ], CrimesComponent);
    return CrimesComponent;
}());
exports.CrimesComponent = CrimesComponent;
//# sourceMappingURL=crimes.component.js.map