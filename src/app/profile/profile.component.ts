
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: Array<Object>;
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


    })

  }

}
