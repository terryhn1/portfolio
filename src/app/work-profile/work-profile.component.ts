import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-profile',
  templateUrl: './work-profile.component.html',
  styleUrls: ['./work-profile.component.css']
})
export class WorkProfileComponent implements OnInit {
  work: Array<Object>;

  constructor() {

  }

  ngOnInit(): void {
    fetch('/assets/work.txt').then(response => response.text()).then(data => {
      var work_data = data.split("\n");
      var holderArray = new Array();

      for (let i = 0; i < work_data.length; i += 10){
        var objectData = {
          date: work_data[i],
          company_name: work_data[i+1],
          location: work_data[i+2],
          titles: work_data[i+3],
          info: [work_data[i+4], work_data[i+5], work_data[i+6]],
          website: work_data[i+7],
          banner: work_data[i+8]
        }
        holderArray.push(objectData);
      }
      this.work = holderArray;
    })
  }

}
