import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-league-champion',
  templateUrl: './league-champion.component.html',
  styleUrls: ['./league-champion.component.css']
})
export class LeagueChampionComponent implements OnInit {
  champion: string;
  championBanner: string;
  role: string;
  data: Observable<any>;
  items: Observable<any>;


  constructor(db: AngularFireDatabase) {
    var href = document.location.href.split('/');
    this.champion = href[href.length -1];
    const firstLetter = this.champion.charAt(0);
    const upper = firstLetter.toUpperCase();
    var firstNameInstance = (upper + this.champion.slice(1)).split('-');
    if (firstNameInstance.length == 1){
      this.champion = firstNameInstance.join('');
    } else {
      let firstLetter = firstNameInstance[1].charAt(0);
      let upper = firstLetter.toUpperCase();
      var secondName = upper + firstNameInstance[1].slice(1);
      this.champion = firstNameInstance[0] + secondName;
    }
    this.data = db.object(this.champion).valueChanges();
    this.items = db.object("Items").valueChanges();
  }

  goBack(){
    window.history.back();
  }

  itemSRC(item: number){
    return "http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/" + item.toString() + ".png";
  }

  ngOnInit(): void {
    this.championBanner = "/assets/league_banners/" + this.champion + "_0.jpg";
    this.data.subscribe(res => {
      let physical = document.getElementById('physical');
      let ability = document.getElementById('ability');
      let defense = document.getElementById('defense');

      physical.style.width = JSON.stringify(res.physical * 10) + "%";
      ability.style.width = JSON.stringify(res.magic * 10) + "%";
      defense.style.width = JSON.stringify(res.defense * 10) + "%";
    });
  
    var backHR = document.getElementById("back-hr");
    var backLink = document.getElementById("back-link");
    console.log("Champion page arrived");
    let animation = function(duration, opacity){
      return anime({
        targets: backHR,
        duration: duration,
        opacity: opacity,
        easing: 'easeInOutSine',
        autoplay: false
      });

    }

    backLink.addEventListener("mouseenter", ()=> {
      anime.remove(backHR);
      animation(400, 1).play();
    });

    backLink.addEventListener("mouseleave", ()=>{
      anime.remove(backHR);
      animation(200, 0).play();
    });

    


    
  }

  ngAfterViewInit(){
    this.items.subscribe(res =>{
      var itemNames = document.getElementsByClassName("item-name");
      var itemImages = document.getElementsByClassName("item-image");
      for(let i = 0; i < itemNames.length; i++){
        let name = itemNames.item(i).innerHTML;
        itemImages.item(i).setAttribute("src", this.itemSRC(res[name]));
        (<HTMLImageElement>itemImages.item(i)).style.width = "100px";
        (<HTMLImageElement>itemImages.item(i)).style.height = "90px";
        (<HTMLImageElement>itemImages.item(i)).style.marginBottom = "10px";
      }
    });
  }

  ngOnDestroy(){
    this.items.subscribe().unsubscribe();
    this.data.subscribe().unsubscribe();
  }
}
