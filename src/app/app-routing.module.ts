import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckServiceComponent } from './check-service/check-service/check-service.component';

const routes: Routes = [
  {
    path:'',
    component: CheckServiceComponent
  },
  {
    path: 'search/:game-search',
    component: HomeComponent
  },
  {
    path: 'check-service',
    component: CheckServiceComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }