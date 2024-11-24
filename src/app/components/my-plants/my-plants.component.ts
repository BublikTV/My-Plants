import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { trigger, transition, style, animate, state } from '@angular/animations';
import { PlantService, Plant } from 'src/app/services/plant.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-plants',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css'],
  animations: [
    trigger('cardAnimation', [
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
  plants: Plant[] = []; // Typed array of plants
  hoverState: { [key: number]: string } = {}; // Hover state for each card

  constructor(private plantService: PlantService) {} // Inject PlantService

  ngOnInit() {
    // Fetch plant data from the REST API using the service
    this.plantService.getPlants().subscribe((data: Plant[]) => {
      this.plants = data;
    });
  }

  // Function to delete a plant
  deletePlant(event: Event, id: number) {
    event.stopPropagation(); // Zatrzymanie propagacji zdarzenia
    this.plantService.deletePlant(id).subscribe(() => {
      this.plants = this.plants.filter(plant => plant.id !== id);
    });
  }

  // Update hover state
  setHoverState(id: number, state: string) {
    this.hoverState[id] = state;
  }

  getHoverState(id: number): string {
    return this.hoverState[id] || 'default';
  }
}
