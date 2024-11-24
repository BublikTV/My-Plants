import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlantService, Plant } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [CommonModule], // Import CommonModule dla dyrektyw Angular, takich jak *ngIf
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css'],
})
export class PlantDetailsComponent implements OnInit {
  plant: Plant | null = null; // Szczegóły rośliny
  plantConditions: { name: string; value: string }[] = []; // Warunki trzymania rośliny
  wateringHistory: { date: string }[] = []; // Historia podlewania
  fertilizationHistory: { date: string }[] = []; // Historia nawożenia

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id)) {
      // Pobranie danych rośliny z serwisu
      this.plantService.getPlants().subscribe((plants: Plant[]) => {
        const foundPlant = plants.find((p) => p.id === id);
        this.plant = foundPlant || null;

        if (this.plant) {
          // Przykładowe dane dla warunków trzymania
          this.plantConditions = [
            { name: 'Light', value: 'Bright, indirect sunlight' },
            { name: 'Water', value: 'Water every 1-2 weeks' },
            { name: 'Temperature', value: '18-25°C' },
            { name: 'Humidity', value: '50-70%' },
          ];

          // Przykładowe dane dla historii podlewania i nawożenia
          this.wateringHistory = [
            { date: '2024-11-01' },
            { date: '2024-11-10' },
            { date: '2024-11-20' },
          ];

          this.fertilizationHistory = [
            { date: '2024-10-15' },
            { date: '2024-11-15' },
          ];
        }
      });
    }
  }
}
