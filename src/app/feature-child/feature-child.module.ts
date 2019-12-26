import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureChildComponent } from './feature-child.component';
import { FeatureChildRoutingModule } from './feature-child-routing.module';



@NgModule({
  declarations: [FeatureChildComponent],
  imports: [
		CommonModule,
		FeatureChildRoutingModule
  ]
})
export class FeatureChildModule { }
