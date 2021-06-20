import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-proj-banner',
  templateUrl: './proj-banner.component.html',
  styleUrls: ['./proj-banner.component.css']
})
export class ProjBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '.container-fluid .squares',
      opacity: 1,
      delay: anime.stagger(200, {grid: [27, 5]}),
      loop:true,
      duration: 1500
    });
  }

}
