import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate } from '@angular/animations';

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
  plants: { name: string; species: string }[] = []; // Tablica roślin

  ngOnInit() {
    // Pobierz dane roślin z localStorage
    const storedPlants = JSON.parse(localStorage.getItem('plants') || '[]');
    this.plants = storedPlants;
  }
}
