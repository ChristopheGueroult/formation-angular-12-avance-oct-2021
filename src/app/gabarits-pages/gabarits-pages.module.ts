import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GabaritFullWidthComponent } from './components/gabarit-full-width/gabarit-full-width.component';
import { GabaritContainerComponent } from './components/gabarit-container/gabarit-container.component';



@NgModule({
  declarations: [
    GabaritFullWidthComponent,
    GabaritContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GabaritFullWidthComponent,
    GabaritContainerComponent
  ]
})
export class GabaritsPagesModule { }
