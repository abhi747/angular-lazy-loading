import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureChildModule } from "../feature-child/feature-child.module";
import { FeatureComponent } from "./feature.component";


const routes: Routes = [
	{
		path: '',
		component: FeatureComponent,
		pathMatch: 'full',
		children: [
			{
			path: 'featurechild',
			loadChildren: () => import('../feature-child/feature-child.module').then(m => FeatureChildModule),
			pathMatch: 'full'
		}
	]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
