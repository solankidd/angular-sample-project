import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModuleTestService } from '../../services/module-test.service';

@Component({
  selector: 'app-check-service',
  templateUrl: './check-service.component.html',
  styleUrls: ['./check-service.component.css'],
  // providers: [ApiService]
})
export class CheckServiceComponent implements OnInit {  

  constructor(
    private api: ApiService,
    private mt: ModuleTestService
  ) { }

  ngOnInit() {
    console.log('check2');
    this.mt.checkMethod()
  }

}