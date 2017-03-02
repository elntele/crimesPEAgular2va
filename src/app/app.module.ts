import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CrimeDetailComponent } from './crime-detail.component';
import { CrimesComponent } from './crimes.component';
import { CrimeService } from './crime.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
 	BrowserModule,
  FormsModule,
  RouterModule.forRoot([
      {
        path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
      },
      {
        path: 'crimes',
        component: CrimesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: CrimeDetailComponent
      }

    ])
  ],
  declarations: [ 
  	AppComponent, 
  	CrimeDetailComponent,
  	CrimesComponent,
    DashboardComponent 
  	],
  providers: [
  	CrimeService
  ],	
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }
