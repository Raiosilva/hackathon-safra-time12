import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-screen',
  templateUrl: './secondary-screen.component.html',
  styleUrls: ['./secondary-screen.component.scss']
})
export class SecondaryScreenComponent {
  @Output() nextStepThird = new EventEmitter();
  @Output() returnStepOne = new EventEmitter();

  public stepSecondary = false;
  public stepThird = true;
  public fineshStep = true;
  public stepInitial = true;

  public setStepThird() {
    this.stepSecondary = false;
    this.stepThird = true;
    this.nextStepThird.emit(this.stepThird)
  }

  public setFineshStep() {
    this.stepThird = false;
    this.fineshStep = true;
  }

  public retornPage1() {
    this.stepInitial = true;
    this.returnStepOne.emit(this.stepInitial)
  }

  public setStepSecondary() {
    this.stepThird = true;
  }
}
