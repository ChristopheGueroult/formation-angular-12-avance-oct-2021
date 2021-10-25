import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { GabaritsPagesModule } from '../gabarits-pages/gabarits-pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective],
  imports: [CommonModule, RouterModule],
  exports: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective,
    GabaritsPagesModule,
    ReactiveFormsModule,
    IconsModule,
  ],
})
export class SharedModule {}
