import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-league-site',
  templateUrl: './league-site.component.html',
  styleUrls: ['./league-site.component.css']
})
export class LeagueSiteComponent implements OnInit {
  icons: Array<String>;
  halfIconLength: number;

  constructor() { }

  ngOnInit(): void {
    fetch('/assets/league_icons/collector.json').then(response => response.json()).then(data =>{
      this.icons = data.images;
      this.halfIconLength = Math.floor(this.icons.length / 2);
    });

  }

}
