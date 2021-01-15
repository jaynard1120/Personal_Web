import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @HostListener('window:resize', ['$event'])

  navigationShow = false;
  resize = (window.innerWidth<=600)? false:true;
  title = 'angular-spec';
  praise = 'Good Work!';
  buttons = [
    {icon: 'fa fa-home', text: 'Home', route: ''},
    {icon: 'fa fa-sign', text: 'Login', route: 'login'},
    {icon: 'fa fa-exclamation', text: 'About', route: 'about'}
  ]
  

  navigationActions(returnType: boolean) {
    this.navigationShow = returnType
  }
}
