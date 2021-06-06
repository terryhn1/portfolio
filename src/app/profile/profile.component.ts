
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  aboutMe: String;
  projects: String;
  web = ['/assets/icons/bootstrap.png', '/assets/icons/docker.png', '/assets/icons/node.png'
        ,'/assets/icons/angular.png', '/assets/icons/react.png', '/assets/icons/vsc.png','/assets/icons/mongodb.png']
  languages = ['/assets/icons/python.png', '/assets/icons/c-plus-plus-logo.png', '/assets/icons/javascript.png'
              ,'/assets/icons/c-sharp-logo.png', '/assets/icons/java.png', '/assets/icons/css.png','/assets/icons/html.png'
              ,'/assets/icons/sql.png'];
  game = ['/assets/icons/unity.png']


  caught = fetch('/assets/about-me.txt').then(response => response.text()).then(data => {
    this.aboutMe = data;
  })
  caught1 = fetch('/assets/projects.txt').then(response => response.text()).then(data => {
    this.projects = data;
  })
  ngOnInit() {
  }

}
