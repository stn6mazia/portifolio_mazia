import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortifolioHeaderComponent, PortifolioContentComponent, PortifolioFooterComponent } from './components';
import { PortifolioComponent } from './portifolio.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PortifolioComponent,
    PortifolioHeaderComponent,
    PortifolioContentComponent,
    PortifolioFooterComponent
  ],
  exports: [PortifolioComponent]
})
export class PortifolioModule { }
