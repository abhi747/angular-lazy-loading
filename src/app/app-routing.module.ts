import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureModule } from "./feature/feature.module";


const routes: Routes = [
	{
		path: 'feature',
		loadChildren: () => import('./feature/feature.module').then(m => FeatureModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
