import { Routes } from '@angular/router';
import { ContactComponent } from './modules/contact/contact.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { CertificatesComponent } from './modules/certificates/certificates.component';
import { IndexComponent } from './modules/index/index.component';

export const routes: Routes = [
    {
        path: "home",
        component: IndexComponent,
    },
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: "contacts",
        component: ContactComponent,
    },
    {
        path: "projects",
        component: ProjectsComponent,
    },
    {
        path: "certificates",
        component: CertificatesComponent,
    }
];
