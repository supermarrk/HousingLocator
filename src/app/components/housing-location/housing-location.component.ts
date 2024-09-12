import { Component, Input } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  template: `
  <section class="listing">
    <img
      class="listing-photo"
      [src]="housingLocation.photo"
      alt="Exterior photo of {{ housingLocation.name }}"
      crossorigin
    />
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
`,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  /**
   * The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler 
   * that the value of this property won't be null or undefined.
   */
  @Input() housingLocation!: HousingLocation; 
}
