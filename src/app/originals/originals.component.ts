import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrls: ['./originals.component.css']
})
export class OriginalsComponent implements OnInit {

  $profile: Observable<any> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.$profile = this.dataService.createCollection('profile');
  }

}
