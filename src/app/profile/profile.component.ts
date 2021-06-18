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

    var icons = document.getElementsByClassName("icon-translate");
    console.log(icons);
    anime({
      targets: icons,
      duration: 1000,
      autoplay: true,
      translateX: [-500, 0],
      easing: 'easeInOutQuad'
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.windowCheck();
  }

}
