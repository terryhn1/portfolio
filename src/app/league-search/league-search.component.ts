import { AriaDescriber } from '@angular/cdk/a11y';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';


@Component({
  selector: 'app-league-search',
  templateUrl: './league-search.component.html',
  styleUrls: ['./league-search.component.css']
})
export class LeagueSearchComponent implements OnInit {
  search: String;
  keyword: String;
  searchMatches: Array<String>;
  resultRestriction = 10;
  pageLimit = Array.from({length: this.resultRestriction}, (x,i)=> i);
  pages: Array<number>;
  currentPage: number;
  loaded: boolean;
  
  constructor(private route: ActivatedRoute, private _router: Router) {
    this._router.routeReuseStrategy.shouldReuseRoute = function() {return false};
  }

  getSearch(){
    var searchBar = document.getElementById('searchBar');
    var keyword = (<HTMLInputElement>searchBar).value.toLowerCase();
      this._router.navigate(['/projects/league-site/search'],{queryParams: {value: keyword, page: this.currentPage}});
  }

  getChampionUrl(champion: String){
    return champion.replace(' ', '-')
  }

  async dataFetch(_callBack){
    fetch('/assets/championNames.txt').then(response => response.text()).then(data => {
      var names = Array.from(data.split('\r\n'));

      for (let i = 0; i < names.length; i++){
        names[i] = names[i].replace(/[^0-9a-z]/gi, ' ');
      }

      this.searchMatches = Array.from(names.filter(character => {
        return character.toLowerCase().includes((<string>this.search));
      }));

      const searchResults = document.getElementById('results');
      searchResults.innerHTML = "Search keyword <i>" + this.search + "</i> led to " + this.searchMatches.length.toString() + " result(s).";
      searchResults.style.color = "white";
      this.pages = Array.from({length: Math.ceil(this.searchMatches.length/this.resultRestriction)}, (x, i) => i);

      _callBack();

    });
  }

  upperCaseWord(str: String){
    const firstLetter = str.charAt(0);
    const upper = firstLetter.toUpperCase();
    return upper + str.slice(1);
  }

  urlReplacement(champion: String){
    if (champion.split(' ').length == 1){
      return "assets/league_banners/" + this.upperCaseWord(champion) + "_0.jpg"
    }
    else {
      var arrayForm = champion.split(' ');
      for (let i = 0; i < arrayForm.length; i ++){
        if (arrayForm[i] == "sa" || arrayForm[i] == "zix"){
          continue;
        }
        else if (arrayForm[i] == "iv"){
          arrayForm[i] = arrayForm[i].toUpperCase();
        }
        else{
          arrayForm[i] = this.upperCaseWord(arrayForm[i]);
        }
      }
      champion = arrayForm.join().replace(',', "");
      return "assets/league_banners/" + champion + "_0.jpg";
    }
  }

  resizeBack(){
      if (window.innerWidth < 550){
        let backSVG =  document.getElementById("back-svg");
        backSVG.setAttribute("width", "30"); backSVG.setAttribute("height", "30");
        let backButton = document.getElementById("back-button");
        backButton.style.top = "60px"; backButton.style.left = "5px";
      } else {
        let backSVG = document.getElementById('back-svg');
        backSVG.setAttribute("width","50"); backSVG.setAttribute("height","50");
        let backButton = document.getElementById("back-button");
        backButton.style.top = "75px"; backButton.style.left = "20px";
      }
  }

  

  ngOnInit(): void {
    var searchBar = document.getElementById('searchBar');
    this.keyword = (<HTMLInputElement>searchBar).value.toLowerCase();
    this.dataFetch(()=> {
      this.loaded = false;}
      );
    this.route.queryParams.subscribe(params => {
      this.search = params.value;
      this.currentPage = parseInt(params.page);
    });
    
  }

  ngAfterViewInit(){
    this.resizeBack();
    window.addEventListener("resize", this.resizeBack);
  }


  ngAfterViewChecked(){
    var cards = document.getElementsByClassName("card");
    
    if (cards.length > 0 && !this.loaded){
      this.loaded = true;

      var pagination = document.getElementsByClassName("number");
      pagination.item(this.currentPage -1).setAttribute("aria-current", "page");
      pagination.item(this.currentPage -1).classList.add("active");

      var skips = document.getElementsByClassName("skip");
      if (this.currentPage != 1){
        skips.item(0).setAttribute("aria-disabled", "false");
        skips.item(0).classList.remove("disabled");
      }
      if(this.currentPage == pagination.length){
        skips.item(1).setAttribute("aria-disabled", "true");
        skips.item(1).classList.add("disabled");
      }
      

      anime.remove(cards);
      anime({
        targets: cards,
        duration: 500,
        delay: function(el, i , l){
          return i * 500;
        },
        translateX: [-3000, 0],
        easing: 'easeInOutSine'
      });
      
      for(let i = 0; i < cards.length; i++){
        let card = cards[i].getElementsByClassName("card-img")[0];
        cards[i].addEventListener("mouseenter", () => {
          anime.remove(card);
          anime({
            targets: card, duration: 400, scale: 1.2, easing: 'easeInOutSine',
          });
        });

        cards[i].addEventListener("mouseleave", () => {
          anime.remove(card);
          anime({
            targets: card, duration: 200, scale: 1.0, easing: 'easeInOutSine'
          });
        });
      }
    }
  }

}
