import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedHeaderType= '1'
  resetSelected(){
    console.log('reset clicked');
  }
  showAllClicked(){
    console.log('Show All clicked');
  }

  toyotaClicked(){
    console.log('toyota clicked');
  }

  hondaClicked() {
    console.log('honda clicked');
  }

  hyundaiClicked(){
    console.log('hyundai clicked');
  }

  lexusClicked(){
    console.log('lexus clicked');
  }

  bmwClicked(){
    console.log('bmw Clicked');
  }

  audiClicked(){
  console.log('audi Clicked');
  }

  chevroletClicked(){
    console.log('chevrolet Clicked');
  }

  dodgeClicked() {
    console.log('dodge Clicked');
  }

  }
