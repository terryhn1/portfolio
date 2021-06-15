import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: Array<Object>;
  innerWidth: Number;
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
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.windowCheck();
  }

}
