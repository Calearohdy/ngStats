import { Routes } from '@angular/router';
import { SectionsalesComponent } from '../app/sections/sectionsales/sectionsales.component';
import { SectionordersComponent } from '../app/sections/sectionorders/sectionorders.component';
import { SectionhealthComponent } from '../app/sections/sectionhealth/sectionhealth.component';


export const appRoutes: Routes = [
    { path: 'sales', component: SectionsalesComponent },
    { path: 'orders', component: SectionordersComponent },
    { path: 'health', component: SectionhealthComponent },
    { path: '', redirectTo: '/sales', pathMatch: 'full'}
];
