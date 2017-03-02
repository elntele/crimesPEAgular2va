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
var crime_1 = require('./crime');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var crime_service_1 = require('./crime.service');
require('rxjs/add/operator/switchMap');
var CrimeDetailComponent = (function () {
    function CrimeDetailComponent(crimeService, route, location) {
        this.crimeService = crimeService;
        this.route = route;
        this.location = location;
    }
    CrimeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.crimeService.getCrime(+params['id']); })
            .subscribe(function (hero) { return _this.crime = hero; });
    };
    CrimeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', crime_1.Crime)
    ], CrimeDetailComponent.prototype, "crime", void 0);
    CrimeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-crime-detail',
            templateUrl: 'crime-detail.component.html'
        }), 
        __metadata('design:paramtypes', [crime_service_1.CrimeService, router_1.ActivatedRoute, common_1.Location])
    ], CrimeDetailComponent);
    return CrimeDetailComponent;
}());
exports.CrimeDetailComponent = CrimeDetailComponent;
//# sourceMappingURL=crime-detail.component.js.map