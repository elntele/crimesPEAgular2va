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
            template: "\n  <h2>V\u00EDtimas</h2>\n  <ul class=heroes>\n  \t<li *ngFor = \"let crime of crimes\" [class.selected]=\"crime === selectedCrime\" (click) = \"onSelect(crime)\">\n  \t\t<span class=\"badge\">{{crime.id}}</span> {{crime.nome_vitima}} \n  \t</li>\n  </ul>\n  <my-crime-detail [crime]=\"selectedCrime\"></my-crime-detail> ",
            styles: ["\n  .selected{\n    background-color: #CFD8DC;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 30em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }"
            ],
        }), 
        __metadata('design:paramtypes', [crime_service_1.CrimeService])
    ], CrimesComponent);
    return CrimesComponent;
}());
exports.CrimesComponent = CrimesComponent;
//# sourceMappingURL=crimes.component.js.map