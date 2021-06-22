import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewportBrand = false;
  viewportIcons = false;
  animationReset = false;

  constructor() { }

  ngOnInit(): void {
    var half = document.getElementById("svg-brand");
    half.style.opacity = "0";
    var iconContainer = document.getElementById("icon-container");
    iconContainer.style.opacity = "0";
    var icons = document.getElementsByClassName("col zoom");

    //Translation Effect
    var translationIcon = anime({
      targets: icons,
      translateX: [-1500, 0],
      duration: 2000,
      autoplay: false,
      delay: anime.stagger(100)
    });


    //Zoom effect for the icons
    var icons = document.getElementsByClassName("zoom-icon");

    for(let i = 0; i < icons.length ; i++){
      var animationEnter = anime({
        targets: icons[i],
        scale: [1.0,1.2],
        duration: 500,
        elasticity:300,
        autoplay:false
      });
      var animationLeave = anime({
        targets: icons[i],
        scale: [1.2, 1.0],
        duration: 500,
        elasticity: 300,
        autoplay:false
      });

      icons[i].addEventListener('mouseenter', animationEnter.play);
      icons[i].addEventListener('mouseleave', animationLeave.play);
    }

    //SVG effect
    var terryNguyen = document.getElementsByClassName("terryNguyen");
    var underLine = document.getElementsByClassName("underLine");
    var programmer = document.getElementsByClassName("programmer");
    var timeline = anime.timeline({
      duration: 1000,
      loop: true,
      autoplay: false,
    });
    timeline.add({
      targets: terryNguyen,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      delay: function(el, i){return i * 300},
      direction: 'alternate',
    }).add({
      targets: programmer,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      delay: function(el, i){return i * 300},
      direction: 'alternate'
    });

    //Scroll effect
    window.onscroll = function (e){
      const brand = document.getElementById("svg-brand");
      const rectBrand = brand.getBoundingClientRect();
      const icons = document.getElementById("icon-container");
      const rectIcons = brand.getBoundingClientRect();
      const carousel = document.getElementById("carouselExampleDark");
      const rectCarousel = carousel.getBoundingClientRect();
      function boundFunc(rect: DOMRect){
          return (rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth));
        };
      
      const inViewPortBrand = boundFunc(rectBrand);
      const inViewPortIcons = boundFunc(rectIcons);
      const inViewPortCarousel = boundFunc(rectCarousel);
              
      
      if (inViewPortBrand && !this.viewportBrand && !this.animationReset){
        //If the page is scrolled to where the SVG can come into view
        this.viewportBrand = true;
        anime({
          targets: brand,
          duration:2000,
          opacity: 1
        });

      } 
      if (inViewPortIcons && !this.viewportIcons && !this.animationReset){
        //If the page is scrolled to the bottom where the icons are
        this.viewportIcons = true;
        this.animationReset= true;
        anime({
          targets: icons,
          duration: 2000,
          opacity:1
        });
        timeline.restart();
        translationIcon.restart();      
          
      } 
      if (this.animationReset && inViewPortCarousel){
        this.viewportIcons = false;
        this.animationReset = false;
        this.viewportBrand = false;
        anime({
          targets: [icons, brand],
          duration: 1000,
          opacity: 0
        });
      }
    }
  
  }

}
