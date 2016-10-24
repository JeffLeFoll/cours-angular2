import {HomepageComponent} from './homepage/homepage.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'catalogue',
        component: CatalogueComponent
    },
    {
        path: '',
        component: HomepageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);