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
    },
    {
      name:'Face and Fall Detection',
      description:'Um algoritmo feito com o propósito de registrar usuários com base em reconhecimento facial  e reconhecer quedas',
      github: 'https://github.com/vjarruda/detection-of-face-and-fall'
    }
  ];
}
