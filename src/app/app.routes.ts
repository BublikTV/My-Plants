import { Routes } from '@angular/router';
import { MyPlantsComponent } from './components/my-plants/my-plants.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { HomeComponent } from './components/home/home.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-plants', component: MyPlantsComponent },
  { path: 'add-plant', component: AddPlantComponent },
  { path: 'plant-details/:id', component: PlantDetailsComponent },
  // { path: '', redirectTo: 'my-plants', pathMatch: 'full' } // Domyślna strona
];
