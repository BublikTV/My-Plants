import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Dodano CommonModule
import { PlantService, Plant } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-details',
  standalone: true, // Ustawione na standalone
  imports: [CommonModule], // Import CommonModule dla dyrektywy *ngIf
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent implements OnInit {
  plant: Plant | undefined;

  constructor(private route: ActivatedRoute, private plantService: PlantService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.plantService.getPlants().subscribe((plants: Plant[]) => {
      this.plant = plants.find(p => p.id === id);
    });
  }
}
