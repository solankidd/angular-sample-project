import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Check2Component } from './components/check2.component';
import { ModuleTestService } from '../services/module-test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Check2Component
  ],
  providers: [
    ModuleTestService
  ]
})
export class CheckService2Module { }