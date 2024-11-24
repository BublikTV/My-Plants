import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate, state } from '@angular/animations';
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
    trigger('cardAnimation', [
      // Animacja wchodzenia/wychodzenia
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ]),
    trigger('hoverAnimation', [
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)'
      })),
      state('default', style({
        transform: 'scale(1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      })),
      transition('default <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class MyPlantsComponent implements OnInit {
  plants: Plant[] = []; // Typowana tablica roślin
  hoverState: { [key: number]: string } = {}; // Stan hover dla każdej karty

  constructor(private plantService: PlantService) {} // Iniekcja serwisu PlantService

  ngOnInit() {
    // Pobierz dane roślin z REST API za pomocą serwisu
    this.plantService.getPlants().subscribe((data: Plant[]) => {
      this.plants = data;
    });
  }

  // Funkcja usuwania rośliny
  deletePlant(id: number) {
    this.plantService.deletePlant(id).subscribe(() => {
      // Po usunięciu rośliny odśwież listę
      this.plants = this.plants.filter(plant => plant.id !== id);
    });
  }

  // Zmiana stanu hover
  setHoverState(id: number, state: string) {
    this.hoverState[id] = state;
  }

  getHoverState(id: number): string {
    return this.hoverState[id] || 'default';
  }
}
