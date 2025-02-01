import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialisation-card',
  templateUrl: './specialisation-card.component.html',
  styleUrl: './specialisation-card.component.css'
})
export class SpecialisationCardComponent {
  @Input() image: String = '';
  @Input() title: String = '';
}
