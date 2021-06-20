import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelpageComponent } from './panelpage/panelpage.component';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';


const routes: Routes = [
{path:  "", pathMatch:  "full", redirectTo:  "home"},
{path: "home", component: UiComponent},
{path: 'panelpage/:planetname', component: PanelpageComponent}];


@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})

export class AppRoutingModule { }
