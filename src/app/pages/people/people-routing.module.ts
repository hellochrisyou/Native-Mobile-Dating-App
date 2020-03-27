import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeoplePage } from './people.component';


const routes: Routes = [
  {
    path: '',
    component: PeoplePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
