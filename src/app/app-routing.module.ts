import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { OriginalsComponent } from './originals/originals.component';

const routes: Routes = [
  {path: '', component: SeriesComponent},
  {path: 'projects', component: MoviesComponent},
  {path: 'aboutme', component: OriginalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
