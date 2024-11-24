import { Routes } from '@angular/router';
import { MyPlantsComponent } from './components/my-plants/my-plants.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { HomeComponent } from './components/home/home.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Domyślna strona główna
  { path: 'home', component: HomeComponent }, // Strona główna
  { path: 'my-plants', component: MyPlantsComponent }, // Strona z roślinami
  { path: 'add-plant', component: AddPlantComponent }, // Formularz dodawania rośliny
  { path: 'plant-details/:id', component: PlantDetailsComponent }, // Szczegóły konkretnej rośliny
];
