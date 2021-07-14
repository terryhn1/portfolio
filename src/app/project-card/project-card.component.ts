import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  projects: Array<Object>;

  constructor() { }
  ngOnInit(): void {
    fetch('/assets/projects.txt').then(response => response.text()).then(data => {
      var project_data = data.split("\n");
      var holderArray = new Array();
      
      for (let i = 0; i < project_data.length; i += 8){
        var objectData = {
          date: project_data[i],
          name: project_data[i+1],
          line1: project_data[i+2],
          line2: project_data[i+3],
          line3: project_data[i+4],
          images: project_data[i+5].split(","),
          websites: project_data[i+6].split(",")
        };
        console.log(objectData.websites)
        
        holderArray.push(objectData);
      }
      this.projects = holderArray;
    })

  }

}
