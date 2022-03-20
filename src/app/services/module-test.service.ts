import { Injectable } from '@angular/core';

@Injectable()
export class ModuleTestService {

  constructor() {
    console.log('instance created module service')
   }

   checkMethod(){
     console.log('checkMethod')
   }

}