import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DogsComponent } from '../app/dogs/dogs.component'
import { CatsComponent } from '../app/cats/cats.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const appRoutes: Routes = [
  {path: 'dogs', component: DogsComponent},
  {path: 'cats', component: CatsComponent},
  {path: '', redirectTo: 'cats', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
