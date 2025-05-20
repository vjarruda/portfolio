import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-projects',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'RateMaster',
      description: 'Um site destinado a conter produtos e avaliações',
      github: 'https://github.com/AnthonyVinicius/RateMaster'
    }
  ];
}
