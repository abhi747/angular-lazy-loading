import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureChildComponent } from "../feature-child/feature-child.component";


const routes: Routes = [
	{
		path: '',
		component: FeatureChildComponent,
		pathMatch: 'full'
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureChildRoutingModule { }
