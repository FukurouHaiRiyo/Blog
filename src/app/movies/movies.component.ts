import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  $projects: Observable<any> | undefined;
  constructor(private projects: DataService) { 
    
  }

  ngOnInit(): void {
    this.$projects = this.projects.createCollection('project');
  }

}
