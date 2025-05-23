import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-index',
  imports: [HomeComponent, CertificatesComponent, ContactComponent, ProjectsComponent, NavbarComponent, FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
