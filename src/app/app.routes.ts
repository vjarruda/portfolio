import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { CertificatesComponent } from './modules/certificates/certificates.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "contacts",
        component: ContactComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
    {
        path: "certificates",
        component: CertificatesComponent
    }
];
