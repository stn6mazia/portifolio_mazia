import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PortifolioHeaderComponent, PortifolioFooterComponent } from './components';
import { PortifolioComponent } from './portifolio.component';
import { AboutComponent, HomeComponent, ContactComponent, PageNotFoundComponent } from './pages';

const portifolioRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portifolio',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      portifolioRoutes,
      { enableTracing: true }
    )
  ],
  declarations: [
    PortifolioComponent,
    PortifolioHeaderComponent,
    PortifolioFooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  exports: [PortifolioComponent]
})
export class PortifolioModule { }
