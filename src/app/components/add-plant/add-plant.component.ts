import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
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
  plantName: string = ''; // Field for plant name
  species: string = '';   // Field for plant species
  description: string = ''; // Field for plant description
  imageUrl: string = ''; // Optional field for image URL
  successMessage: string = ''; // Success message

  constructor(private plantService: PlantService) {} // Injecting PlantService

  // Function to handle adding a plant
  addPlant(form: NgForm) {
    if (form.valid) {
      const newPlant = {
        name: this.plantName,
        species: this.species,
        description: this.description || '', // Set to empty if no description
        imageUrl: this.imageUrl || '' // Set to empty if no image
      };

      // Call service to add plant to the database
      this.plantService.addPlant(newPlant).subscribe({
        next: (plant) => {
          this.successMessage = `Plant "${plant.name}" has been added successfully!`;
          form.resetForm(); // Reset the form after successful addition
        },
        error: () => {
          this.successMessage = 'An error occurred while adding the plant.';
        }
      });
    }
  }
}
