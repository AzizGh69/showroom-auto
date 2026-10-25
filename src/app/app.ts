import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { HeadBar } from './head-bar/head-bar';
import { SearchBar } from './search-bar/search-bar';
import { Auto } from './auto';

@Component({
  selector: 'app-root',
  imports: [HeadBar, SearchBar, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('showroom-auto');
      autoList: Auto[] = [
    { brand: 'BMW',        model: 'X2',          price: 210, power: 8,  photo: 'photos/X2.webp',       units: 4 },
    { brand: 'BMW',        model: 'X3',          price: 290, power: 11, photo: 'photos/X3.webp',       units: 2 },
    { brand: 'BMW',        model: 'iX',          price: 420, power: 13, photo: 'photos/IX.webp',       units: 1 },
    { brand: 'Audi',       model: 'A3',          price: 163, power: 6,  photo: 'photos/A3.webp',       units: 11 },
    { brand: 'Audi',       model: 'Q3',          price: 215, power: 8,  photo: 'photos/Q3.webp',       units: 6 },
    { brand: 'Audi',       model: 'Q5',          price: 320, power: 11, photo: 'photos/Q5.webp',       units: 3 },
    { brand: 'Mercedes',   model: 'Class C',     price: 245, power: 9,  photo: 'photos/CLASS-C.webp',  units: 5 },
    { brand: 'Mercedes',   model: 'GLA',         price: 230, power: 8,  photo: 'photos/GLA.webp',      units: 7 },
    { brand: 'Mercedes',   model: 'GLE',         price: 450, power: 15, photo: 'photos/GLE.webp',      units: 2 },
    { brand: 'Land Rover', model: 'Defender',    price: 480, power: 14, photo: 'photos/DEFENDER.webp', units: 2 },
    { brand: 'Land Rover', model: 'Evoque',      price: 270, power: 9,  photo: 'photos/EVOQUE.webp',   units: 4 },
    { brand: 'Land Rover', model: 'Range Rover', price: 650, power: 18, photo: 'photos/RANGE.webp',    units: 1 },
    { brand: 'Jaguar',     model: 'E-Pace',      price: 260, power: 9,  photo: 'photos/EPACE.webp',    units: 3 },
    { brand: 'Jaguar',     model: 'F-Pace',      price: 340, power: 12, photo: 'photos/FPACE.webp',    units: 2 },
    { brand: 'Alfa Romeo', model: 'Giulia',      price: 230, power: 9,  photo: 'photos/GIULIA.webp',   units: 3 },
    { brand: 'Alfa Romeo', model: 'Stelvio',     price: 280, power: 10, photo: 'photos/STELVIO.webp',  units: 2 },
  ];

  selectedAuto?: Auto;

  updateAuto(auto: Auto) {
    this.selectedAuto = auto;
  }
}
