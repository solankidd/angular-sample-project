import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckServiceComponent } from './check-service/check-service/check-service.component';
import { Check2Component } from './check-service2/components/check2.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'search/:game-search',
    component: HomeComponent
  },
  {
    path: 'check-service',
    component: CheckServiceComponent
  },
  {
    path: 'check2',
    component: Check2Component
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }