import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-work-banner',
  templateUrl: './work-banner.component.html',
  styleUrls: ['./work-banner.component.css']
})
export class WorkBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '.container-fluid .squares',
      opacity: 1,
      delay: anime.stagger(200, {grid: [23, 5]}),
      loop:true,
      duration: 1500
    });
  }

}
