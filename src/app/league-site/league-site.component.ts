import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-league-site',
  templateUrl: './league-site.component.html',
  styleUrls: ['./league-site.component.css']
})
export class LeagueSiteComponent implements OnInit {
  icons: Array<String>;
  halfIconLength: number;
  championNames: Array<String>;

  constructor(private _router: Router){
  }

  getSearch(){
    var searchBar = document.getElementById('searchBar');
    var keyword = (<HTMLInputElement>searchBar).value.toLowerCase();
    this._router.navigate(['/projects/league-site/search'], {queryParams: {value: keyword, page: 1}});
  }

  ngOnInit(): void {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener("keyup", event => { 
      if ((<KeyboardEvent>event).key == "Enter"){
        this.getSearch();
      }
    });
    fetch('/assets/league_icons/collector.json').then(response => response.json()).then(data =>{
      this.icons = data.images;
      this.halfIconLength = Math.floor(this.icons.length / 2);
    });

    fetch('/assets/championNames.txt').then(response => response.text()).then(data =>{
      var names = data.split('\n');
      var holderArray = new Array();
      names.forEach((ele)=>{
        holderArray.push(ele.trim());
      });
      this.championNames = holderArray;
    });

  }

  ngAfterViewInit(): void{
    var iconsTop = document.querySelectorAll('.carousel-1 .carousel .carousel-item');
    var iconsBottom = document.querySelectorAll('.carousel-2 .carousel .carousel-item');

    iconsTop.forEach((element) => {
      const minSlide = 10;
      let next = element.nextElementSibling;
      for (var i = 1; i < minSlide; i++){
        if (!next){
          next = iconsTop[0];
        }
        let cloneChild = next.cloneNode(true);
        element.appendChild(cloneChild.firstChild);
        next = next.nextElementSibling;
      }
    });

    iconsBottom.forEach((element)=> {
      const minSlide =10;
      let next = element.nextElementSibling;
      for (var i = 1; i < minSlide; i++){
        if (!next){
          next = iconsBottom[0];
        }
        let cloneChild= next.cloneNode(true);
        element.appendChild(cloneChild.firstChild);
        next = next.nextElementSibling;
      }
    });
  }


}
