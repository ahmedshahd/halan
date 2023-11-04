import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent },
  { path: '', redirectTo: "/user-search", pathMatch: "full" },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
