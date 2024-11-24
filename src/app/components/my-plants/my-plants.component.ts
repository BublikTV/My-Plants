import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate } from '@angular/animations';
import { PlantService, Plant } from 'src/app/services/plant.service'; // Import serwisu i interfejsu Plant

@Component({
  selector: 'app-my-plants',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MyPlantsComponent implements OnInit {
  plants: Plant[] = []; // Typowana tablica roślin

  constructor(private plantService: PlantService) {} // Iniekcja serwisu PlantService

  ngOnInit() {
    // Pobierz dane roślin z REST API za pomocą serwisu
    this.plantService.getPlants().subscribe((data: Plant[]) => {
      this.plants = data;
    });    
  }
}
