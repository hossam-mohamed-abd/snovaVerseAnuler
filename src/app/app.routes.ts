import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import path from 'path';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VrServiceComponent } from './components/home/vr-service/vr-service.component';
import { ARAIServiceComponent } from './components/home/araiservice/araiservice.component';
import { MetaverseServiceComponent } from './components/home/metaverse-service/metaverse-service.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
    , {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'home/vr-service',
        component: VrServiceComponent
    },
    {
        path: 'home/AR&AI-service',
        component: ARAIServiceComponent
    },
    {
        path: 'home/metaverse-service',
        component: MetaverseServiceComponent
    },
    {
        path:'home/contact-us',
        component:ContactUsComponent,
        title:'contact-us'
    }
    ,{
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
