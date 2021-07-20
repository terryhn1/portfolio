import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-champion',
  templateUrl: './league-champion.component.html',
  styleUrls: ['./league-champion.component.css']
})
export class LeagueChampionComponent implements OnInit {
  champion: string;
  championBanner: string;
  role: string;

  constructor() { }

  ngOnInit(): void {
    var href = document.location.href.split('/');
    this.champion = href[href.length - 1];
    const firstLetter = this.champion.charAt(0);
    const upper = firstLetter.toUpperCase();

    this.champion = upper + this.champion.slice(1);

    this.championBanner = "/assets/league_banners/" + this.champion + "_0.jpg";
    console.log(this.championBanner);
  }

}
