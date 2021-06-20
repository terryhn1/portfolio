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
    var animation = anime.timeline({
      loop:true,
      duration: 1200,
      autoplay: false
    });
    animation.add({
      targets: '.container-fluid .squares',
      opacity: 1,
      delay:anime.stagger(100,{grid: [27,5]})
    }).add({
      targets: '.container-fluid .square-normal',
      backgroundColor: "#000000",
      delay: anime.stagger(20, {grid: [27,5], from: "center"})
    }).add({
      targets: '.container-fluid .square-normal',
      backgroundColor: "#ffffff",
      delay: anime.stagger(50, {grid: [27,5], from: "center"})
    });

    animation.restart();
  }

}
