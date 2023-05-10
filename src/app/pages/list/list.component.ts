import { Component } from '@angular/core';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  restaurants: Array<{id: number; title: string; desc: string; food: Array<string>}> = [
    {
      id: 1,
      title: 'Fontaine de Trevi',
      desc: 'Cuisine de famille italienne',
      food: ['pizza', 'pasta', 'tiramisu']
    },
    {
      id: 2,
      title: 'Taj Mahal',
      desc: 'Cuisine indienne',
      food: ['masala dosa', 'dal makhani', 'pani puri']
    },
    {
      id: 3,
      title: 'Sanctuaire Asakusa',
      desc: 'Cuisine japonaise',
      food: ['onigiri', 'sushi & sashimi', 'ramen']
    }
  ];

}
