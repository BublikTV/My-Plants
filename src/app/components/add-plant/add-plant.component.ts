import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlantService } from 'src/app/services/plant.service';

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
  imageUrl: string = ''; // Opcjonalny URL zdjęcia
  successMessage: string = ''; // Komunikat o sukcesie

  constructor(private plantService: PlantService) {} // Wstrzyknięcie serwisu PlantService

  // Funkcja obsługująca dodanie rośliny
  addPlant() {
    if (this.plantName && this.species) {
      const newPlant = {
        name: this.plantName,
        species: this.species,
        description: this.description || '', // Jeśli brak opisu, ustaw jako pusty
        imageUrl: this.imageUrl || '' // Jeśli brak zdjęcia, ustaw pusty ciąg
      };

      // Wywołanie serwisu, aby dodać roślinę do bazy danych
      this.plantService.addPlant(newPlant).subscribe({
        next: (plant) => {
          this.successMessage = `Plant "${plant.name}" has been added successfully!`;
          this.clearForm();
        },
        error: () => {
          this.successMessage = 'An error occurred while adding the plant.';
        }
      });
    } else {
      this.successMessage = 'Please fill out both the Plant Name and Species fields!';
    }
  }

  // Funkcja do resetowania formularza
  private clearForm() {
    this.plantName = '';
    this.species = '';
    this.description = '';
    this.imageUrl = '';
  }
}
