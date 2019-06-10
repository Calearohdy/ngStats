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
import { BarchartComponent } from './charts/barchart/barchart.component';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { ServerComponent } from './server/server.component';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      SectionsalesComponent,
      SectionordersComponent,
      SectionhealthComponent,
      BarchartComponent,
      LinechartComponent,
      PiechartComponent,
      ServerComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
