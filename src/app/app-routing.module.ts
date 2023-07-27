import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementAddComponent } from './evenement-add/evenement-add.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { ParamCreDetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'add', component: EvenementAddComponent },
  { path: 'list', component: EvenementListComponent },
  {path: 'event-details/:id', component: ParamCreDetailsComponent},
  {path: 'event-update/:id', component: UpdateComponent},
  {path: 'search', component: SearchComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
