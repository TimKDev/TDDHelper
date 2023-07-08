import { Component, EventEmitter, Input, Output } from '@angular/core';

export type CycleName = 'red' | 'green' | 'refactor';

@Component({
  selector: 'app-refactor-cycle',
  templateUrl: './refactor-cycle.component.html',
  styleUrls: ['./refactor-cycle.component.scss']
})
export class RefactorCycleComponent {
  @Input() activeCycle!: CycleName;
  @Input() showBackoutMessage!: boolean;
  @Output() changeCycle = new EventEmitter<CycleName>();
  @Output() backout = new EventEmitter<void>();

  goToNextCycle(){
    if(this.activeCycle === 'red') this.changeCycle.emit('green');
    else if(this.activeCycle === 'green') this.changeCycle.emit('refactor');
    else{
      this.changeCycle.emit('red');
    }
  }

  emitBackout(){
    this.backout.emit();
  }
}
