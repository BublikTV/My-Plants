import { Routes } from '@angular/router';
import { MyPlantsComponent } from './components/my-plants/my-plants.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';

export const routes: Routes = [
  { path: 'my-plants', component: MyPlantsComponent },
  { path: 'add-plant', component: AddPlantComponent },
  { path: '', redirectTo: 'my-plants', pathMatch: 'full' } // Domyślna strona
];
