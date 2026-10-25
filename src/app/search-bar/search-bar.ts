import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  imports: [NgFor],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input() autos: Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto>();
  results: Auto[] = [];

  searchAutoList(brand: string) {
    this.results = this.autos.filter(auto => auto.brand.toLowerCase() === brand.toLowerCase());
  }

  selectedAuto(auto: Auto) {
    this.selectAutoEvent.emit(auto);
  }
}