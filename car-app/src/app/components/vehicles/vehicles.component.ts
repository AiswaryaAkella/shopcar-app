import { Component, Input } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicles';
import {details} from '../../../assets/vehiclesMock';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  @Input() selectedHeaderType: string | undefined;
  Vehicles: Vehicle[] = [];

  ngOnInit() {
    console.log('ddddddddd',details);  // Check the output in the browser's console
    this.Vehicles = details;
    }
  }