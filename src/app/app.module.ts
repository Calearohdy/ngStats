import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes/routes';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionsalesComponent } from './sections/sectionsales/sectionsales.component';
import { SectionordersComponent } from './sections/sectionorders/sectionorders.component';
import { SectionhealthComponent } from './sections/sectionhealth/sectionhealth.component';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      SectionsalesComponent,
      SectionordersComponent,
      SectionhealthComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
