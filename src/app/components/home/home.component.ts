import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from '../../models';
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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search'])
      }
    })
  }

  searchGames(sort:string, search?:string): void {
    this.api
    .getGameList(sort, search)
    .subscribe((gameList: APIResponse<Game>)=>{
      console.log(gameList)
    })

  }

}