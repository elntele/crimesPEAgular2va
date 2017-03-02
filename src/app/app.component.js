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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Acervo de Denúncias';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<div class=\"page-header text-center\"><h3>{{title}}</h3></div>\n\t<ul class=\"nav nav-pills\">\n  \t\t<li role=\"presentation\"><a routerLink = \"/dashboard\">Dashboard</a></li>\n  \t\t<li role=\"presentation\"><a routerLink = \"/crimes\">Crimes</a></li>\n\t</ul>\n\t<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*<h1>{{title}}</h1>
    <nav class="">
        <a routerLink = "/dashboard">Dashboard</a>
        <a routerLink = "/crimes">crimes</a>
    </nav> */ 
//# sourceMappingURL=app.component.js.map