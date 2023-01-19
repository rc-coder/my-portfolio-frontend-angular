import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectList } from '../mock-projects';
import { Project } from '../project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProjects(): Project[] {
    return projectList;
  }
}
