import { Component } from '@angular/core';
import { CycleName } from './refactor-cycle/refactor-cycle.component';
import { Gear } from './rules-container/rules-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDDHelper';
  activeCycle: CycleName = 'red';
  gear: Gear = "low";
  showBackoutMessage = false;

  setCycle(newCycle: CycleName){
    this.activeCycle = newCycle;
    this.showBackoutMessage = false;
  }

  setGear(newGear: Gear){
    this.gear = newGear;
  }

  backout(){
    this.activeCycle = 'red';
    this.gear = 'low';
    this.showBackoutMessage = true;
  }
}
