import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CycleName } from '../refactor-cycle/refactor-cycle.component';
import { RulesConfig } from './rules.config';

export type Gear = 'low' | 'medium' | 'high';

@Component({
  selector: 'app-rules-container',
  templateUrl: './rules-container.component.html',
  styleUrls: ['./rules-container.component.scss']
})
export class RulesContainerComponent {
  @Input() activeCycle!: CycleName;
  @Input() gear!: Gear;
  @Output() changeGear = new EventEmitter<Gear>();

  public readonly config = RulesConfig;  

  emitChangeGear(newGear: Gear){
    this.changeGear.emit(newGear);
  }
}
