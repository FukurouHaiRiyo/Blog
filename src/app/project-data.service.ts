import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }

  getProjects() {
    return [
      {
        name: 'WolfBot',
        image: 'assets/images/project-1.jpg',
        gitUrl: 'https://github.com/comby-cmyk/WolfBot'
      },

      {
        name: 'A project',
        image: 'Img',
        gitUrl: 'url'
      }
    ]
  }
}
