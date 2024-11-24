import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-plants',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css']
})
export class MyPlantsComponent implements OnInit {
  plants: { name: string; species: string }[] = []; // Tablica roślin

  ngOnInit() {
    // Pobierz dane roślin z localStorage
    const storedPlants = JSON.parse(localStorage.getItem('plants') || '[]');
    this.plants = storedPlants;
  }
}
