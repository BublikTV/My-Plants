import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
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
    trigger('iconHoverAnimation', [
      state('hovered', style({
        transform: 'scale(1.2)',
        color: 'red'
      })),
      state('default', style({
        transform: 'scale(1)',
        color: 'inherit'
      })),
      transition('default <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class MyPlantsComponent implements OnInit {
  plants: Plant[] = [];
  hoverState: { [key: number]: string } = {};

  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.plantService.getPlants().subscribe((data: Plant[]) => {
      this.plants = data;
    });
  }

  deletePlant(event: Event, id: number) {
    event.stopPropagation();
    this.plantService.deletePlant(id).subscribe(() => {
      this.plants = this.plants.filter(plant => plant.id !== id);
    });
  }

  setIconHoverState(state: string, id: number) {
    this.hoverState[id] = state;
  }

  getIconHoverState(id: number): string {
    return this.hoverState[id] || 'default';
  }
}
