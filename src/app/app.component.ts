import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true, // Komponent standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatToolbarModule, MatButtonModule] // Tutaj dodajemy moduły!
})
export class AppComponent {
  title = 'my-plants';
}
