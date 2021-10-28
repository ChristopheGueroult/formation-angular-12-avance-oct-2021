import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GbEffects } from '../core/store/gb-store/effects/gb.effects';
import {
  gbFeatureKey,
  gbReducer,
} from '../core/store/gb-store/reducer/gb.reducer';
import { GabaritContainerComponent } from './components/gabarit-container/gabarit-container.component';
import { GabaritFullWidthComponent } from './components/gabarit-full-width/gabarit-full-width.component';

@NgModule({
  declarations: [GabaritFullWidthComponent, GabaritContainerComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(gbFeatureKey, gbReducer),
    EffectsModule.forFeature([GbEffects]),
  ],
  exports: [GabaritFullWidthComponent, GabaritContainerComponent],
})
export class GabaritsPagesModule {}
