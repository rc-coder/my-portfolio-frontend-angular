import { Component, Input } from '@angular/core';
import { projectList } from 'src/app/mock-projects';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() project: Project = projectList[0];
}
