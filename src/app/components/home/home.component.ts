import { Component, OnInit } from '@angular/core';
import { Game } from '../../models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit {
  public sort: string;
  public games: Game[]
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
  }

  searchGames(sort) {

  }

}