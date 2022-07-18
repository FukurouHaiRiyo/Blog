import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  $blog: Observable<any> | undefined;
  constructor(private dataService: DataService) { 
    
  }

  ngOnInit(): void {
    this.$blog = this.dataService.createCollection('blog');
  }

}
