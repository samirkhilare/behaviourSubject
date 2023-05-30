import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandtableComponent } from './expandtable/expandtable.component';

const routes: Routes = [
  { path: "expand", component: ExpandtableComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
