import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-plant',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent {
  plantName: string = ''; // Pole na nazwę rośliny
  species: string = '';   // Pole na gatunek rośliny
  description: string = ''; // Pole na opis rośliny
  successMessage: string = ''; // Komunikat o sukcesie

  // Funkcja obsługująca dodanie rośliny
  addPlant() {
    if (this.plantName && this.species) {
      const newPlant = {
        name: this.plantName,
        species: this.species,
        description: this.description || '' // Jeśli brak opisu, ustaw jako pusty
      };

      // Dodaj roślinę do lokalnej pamięci (localStorage)
      const plants = JSON.parse(localStorage.getItem('plants') || '[]');
      plants.push(newPlant);
      localStorage.setItem('plants', JSON.stringify(plants));

      // Wyświetl komunikat
      this.successMessage = `Plant "${this.plantName}" has been added successfully!`;

      // Resetuj pola formularza
      this.plantName = '';
      this.species = '';
      this.description = '';
    } else {
      this.successMessage = 'Please fill out both the Plant Name and Species fields!';
    }
  }
}
