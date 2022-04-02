import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestFormComponent } from './invest-form/invest-form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'invest', component: InvestFormComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }