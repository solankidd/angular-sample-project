import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-check-service',
  templateUrl: './check-service.component.html',
  styleUrls: ['./check-service.component.css']
})
export class CheckServiceComponent implements OnInit { 

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

}