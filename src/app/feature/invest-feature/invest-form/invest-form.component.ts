import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest-form',
  templateUrl: './invest-form.component.html',
  styleUrls: ['./invest-form.component.scss']
})
export class InvestFormComponent implements OnInit {
  public stepInitial = true;
  public stepTwo!: boolean;
  public stepThird!: boolean;
  public stepFour!: boolean;
  public stepFive!: boolean;

  constructor() { }

  ngOnInit(): void { }



  returnStepOne(stepTwo: any) {
    this.stepInitial = stepTwo;
    this.stepTwo = false;
  }

  returnStepTwo(stepTwo: any) {
    console.log(stepTwo);

    this.stepTwo = true;
    this.stepThird = stepTwo;
  }

  returnStepThird(stepTwo: any) {
    console.log(stepTwo);

    this.stepFour = stepTwo;
    this.stepThird = true;
  }

  nextStepTwo(stepTwo: boolean) {
    this.stepTwo = stepTwo;
    this.stepInitial = false;
  }

  nextStepThird(stepThird: boolean) {
    this.stepThird = stepThird;
    this.stepTwo = false;
  }

  nextStepFour(stepFour: boolean) {
    this.stepFour = stepFour;
    this.stepThird = false;
  }

  nextStepFive(stepFive: boolean) {
    console.log(stepFive);

    this.stepFive = stepFive;
    this.stepFour = false;
  }
}
