import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var notFound = document.getElementById("not-found");

    anime({
      targets: notFound,
      strokedDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i){return i * 100},
      direction: 'alternate',
      loop:true
    }) 
  }

}
