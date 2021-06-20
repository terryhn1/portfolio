import { Component, HostListener, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: Array<Object>;
  innerWidth: Number;
  images: Array<any>;
  animationCheck = false;
  windowCheck = function(){
    this.innerWidth = window.innerWidth;
    var prof_desc = document.getElementById("prof-desc");
    if (window.innerWidth <= 1500){
      prof_desc.className = "col";
    }
    else{
      prof_desc.className = "col-8";
    }
  }


  ngOnInit() {
    //Data fetch for the icon pictures
    fetch('/assets/profile.txt').then(response => response.text()).then(data =>{
      var newData = data.split("\n");
      var holderArray = new Array();

      for (let i = 0; i < newData.length; i += 3){
        var objectData = {
          title: newData[i],
          images: newData[i+1].split(',')
        };
        holderArray.push(objectData);
      }
      this.data = holderArray;

      this.windowCheck();
    });

    //profile Banner Animation
    anime({
      targets: document.getElementById("profile-banner"),
      loop: true,
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [17,10], from: 'center'})
    });

    //Icons Animation
    var icons = document.getElementById("icon-translate");
    var resetAnim = anime({
      targets: icons,
      duration: 100,
      opacity: 0,
      easing: 'easeInOutSine',
      autoplay: false
    });
    var startAnim =  anime({
      targets: icons,
      duration: 500,
      opacity: 1,
      easing: 'easeInOutSine',
      translateX: [-2000,0]
    });

    icons.style.opacity = "0";

    window.onscroll = function(e){
      const half = document.getElementById("half");
      const profileBanner = document.getElementById("profile-banner");
      const end = document.getElementById("end");
      const rectIcons = half.getBoundingClientRect();
      const rectProfile = profileBanner.getBoundingClientRect();
      const rectEnd = end.getBoundingClientRect();

      function funcBound(rect: DOMRect){
        return (rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth));
        }
      

      if (funcBound(rectIcons) && !this.animationCheck){
        this.animationCheck = true;
        startAnim.restart();

      }

      if (funcBound(rectProfile) && this.animationCheck){
        //user has scrolled to the very top for the animation reset
        this.animationCheck = false;
        console.log("resetting the animation");
        resetAnim.restart();
        
      }

    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.windowCheck();
  }

}
