import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-style',
  templateUrl: './vehicle-style.component.html',
  styleUrls: ['./vehicle-style.component.scss']
})
export class VehicleStyleComponent {
  selectedVehicleType = '1'
  resetSelected() {
    console.log('reset clicked');
  }

  showAllClicked() {
    console.log('Show All clicked');
  }

  hatchBackClicked() {
    console.log('Show All clicked');
  }

  suvClicked() {
    console.log('Suv Clicked');
  }

  sedanClicked() {
    console.log('sedan Clicked');
  }




}
