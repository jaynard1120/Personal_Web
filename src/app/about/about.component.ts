import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  hobbies = [
    {title: "I love nature!", image:'../../assets/images/hobby2.jpg', route:'https://www.nature.com/'},
    {title: "I love watching anime!", image:'../../assets/images/hobby1.png', route:"https://animekisa.tv/"},
    {title: "I love playing volleyball!", image:'../../assets/images/hobby3.png', route: 'https://www.britannica.com/sports/volleyball'},
    {title: "I hate coding!", image: '../../assets/images/codeImage.jpg', route: 'https://www.w3schools.com/whatis/'},
    {title: "I love SciFi movies!", image:'../../assets/images/hobby4.jfif', route:'https://vikv.net/'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
