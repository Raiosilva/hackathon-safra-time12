import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Output() nextStepTwo = new EventEmitter();

  public stepSecondary = true;

  constructor() { }

  ngOnInit(): void {
  }

  public setStepSecondary() {
    this.stepSecondary = true;
    this.nextStepTwo.emit(this.stepSecondary)
  }
}
