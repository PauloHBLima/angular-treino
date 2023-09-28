import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { FirstProjectComponent } from './components/first-project/first-project.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
  {path: '', component: FirstProjectComponent},
  {path: 'list', component: ListRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
