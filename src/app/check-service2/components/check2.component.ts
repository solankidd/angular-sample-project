import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-check-service',
  templateUrl: './check2.component.html',
  styleUrls: ['./check2.component.css'],
  // providers: [ApiService]
})
export class Check2Component implements OnInit {  

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    console.log('Test')
  }

}