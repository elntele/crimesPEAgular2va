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
var lista_crimes_1 = require('./lista.crimes');
var CrimeService = (function () {
    function CrimeService() {
    }
    CrimeService.prototype.getCrimes = function () {
        return Promise.resolve(lista_crimes_1.CRIMES);
    };
    CrimeService.prototype.getCrime = function (id) {
        return this.getCrimes().then(function (crimes) { return crimes.find(function (crime) { return crime.id === id; }); });
    };
    CrimeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CrimeService);
    return CrimeService;
}());
exports.CrimeService = CrimeService;
//# sourceMappingURL=crime.service.js.map