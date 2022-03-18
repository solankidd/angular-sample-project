import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { CheckServiceComponent } from './check-service/check-service.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    CheckServiceComponent
  ],
  providers: [
    ApiService
  ]
})
export class CheckServiceModule { }