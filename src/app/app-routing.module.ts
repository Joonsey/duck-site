import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { DefaultComponent } from './components/default/default.component';
import { CreateDuckComponent } from './components/create-duck/create-duck.component';

const routes: Routes = [
	{
		path: "ducks",
		component: MainframeComponent
	},
	{
		path: "",
		component: DefaultComponent
	},
	{
		path: "new-duck",
		component: CreateDuckComponent
	},
	{
		path: "**",
		redirectTo: "ducks"
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
