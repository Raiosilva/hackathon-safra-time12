import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invest-form',
  templateUrl: './invest-form.component.html',
  styleUrls: ['./invest-form.component.scss']
})
export class InvestFormComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  public loading = false;
  public stepInitial = true;
  public stepSecondary = false;
  public stepThird = false;
  public fineshStep = false;

  public field1 = 300;
  public field2 = 0;
  public field3 = 0;
  public field4 = 100;
  public field5 = 200;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.loading = true;
    // let email = this.loginForm.value.email;
    // let password = this.loginForm.value.password;
    // this.authService.login(email, password)
    //   .subscribe(
    //     (u) => {
    //       this.loginOkNotification(u!);
    //       this.router.navigateByUrl('/');
    //       this.loading = false;
    //     },
    //     (err) => {
    //       this.loginErrorNotification(err!);
    //       this.loading = false;
    //     }
    //   );
  }

  loginGoogle() {
    // this.loading = true;
    // this.authService.loginGoogle()
    //   .subscribe(
    //     (u) => {
    //       this.loginOkNotification(u!);
    //       this.router.navigateByUrl('/');
    //       this.loading = false;
    //     },
    //     (err) => {
    //       this.loginErrorNotification(err!);
    //       this.loading = false;
    //     }
    //   );
  }

  public setStepSecondary() {
    this.stepInitial = false;
    this.stepSecondary = true;
  }

  public setStepThird() {
    this.stepSecondary = false;
    this.stepThird = true;
  }

  public setFineshStep() {
    this.stepThird = false;
    this.fineshStep = true;
  }

  public less() {
    this.field1 += - 10
  }

}
