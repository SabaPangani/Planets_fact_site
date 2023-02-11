import { Component, Input } from '@angular/core';
import { Planet } from 'src/app/model/planet';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() planets:Planet[] = [];
}
