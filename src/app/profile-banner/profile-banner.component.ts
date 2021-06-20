import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.css']
})
export class ProfileBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '.container-fluid .squares',
      opacity: 1,
      delay: anime.stagger(200, {grid: [25, 5]}),
      loop:true,
      duration: 1500
    });
  }

}
