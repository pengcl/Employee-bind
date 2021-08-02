import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BindListComponent} from './pages/bind/list/list.component';
import {BindItemComponent} from './pages/bind/item/item.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'news/list', pathMatch: 'full'
  },
  {
    path: 'bind/list',
    component: BindListComponent
  },
  {
    path: 'bind/item/:id',
    component: BindItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
