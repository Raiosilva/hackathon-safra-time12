import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

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

  public formPassword: FormGroup = this.fb.group({
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
  });

  public loading = false;
  public stepInitial = true;
  public stepSecondary = false;
  public stepThird = false;
  public fineshStep = false;
  public stepFour = false;

  public field1 = 300;
  public field2 = 100;
  public field3 = 200;
  public field4 = 100;
  public field5 = 200;

  public result!: number;
  public change: number = 0;
  public disabledLess1!: boolean;
  public disabledLess2!: boolean;
  public disabledLess3!: boolean;
  public disabledLess4!: boolean;
  public disabledLess5!: boolean;

  public blockvalues!: boolean;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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

  public retornPage1() {
    this.stepInitial = true;
    this.stepSecondary = false;
  }

  public retornPage2() {
    this.stepSecondary = true;
    this.stepThird = false;
  }

  public retornPage3() {
    this.stepThird = true;
    this.fineshStep = false;
  }

  public confirm() {
    this.onSubmitConfirm();
  }

  public less1() {
    this.field1 += - 100;
    this.disabledLess1 = this.field1 == 0;
    this.resultGlobal();
  }

  public more1() {
    this.field1 += + 100;
    this.resultGlobal();
  }

  public less2() {
    this.field2 += - 100;
    this.disabledLess2 = this.field2 == 0;
    this.resultGlobal();
  }

  public more2() {
    this.field2 += + 100;
    this.resultGlobal();
  }

  public less3() {
    this.field3 += - 100;
    this.disabledLess3 = this.field3 == 0;
    this.resultGlobal();
  }

  public more3() {
    this.field3 += + 100;
    this.resultGlobal();
  }

  public less4() {
    this.field4 += - 100;
    this.disabledLess4 = this.field4 == 0;
    this.resultGlobal();
  }

  public more4() {
    this.field4 += + 100;
    this.resultGlobal();
  }

  public less5() {
    this.field5 += - 100;
    this.disabledLess5 = this.field5 == 0;
    this.resultGlobal();
  }

  public more5() {
    this.field5 += + 100;
    this.resultGlobal();
  }

  public resultGlobal() {
    this.result = this.field1 + this.field2 + this.field3 + this.field4 + this.field5;
    this.blockvalues = this.result == 10000;
    if (this.blockvalues) {
      this.snackBar.open(
        'Limite excedido ',
        'OK',
        { duration: 2000 }
      );
    }
  }

  public onSubmitConfirm() {
    const value = this.formPassword.getRawValue();
    if (value && value.passwordConfirm === '123456') {
      this.snackBar.open(
        'Transação confirmada com sucesso!',
        'OK',
        { duration: 2000 }
      );
      this.stepFour = true;
      this.fineshStep = false;
    } else {
      this.snackBar.open(
        'Senha inválida',
        'OK',
        { duration: 2000 }
      );
    }
  }

  public exit() {
    this.authService.clear();
    this.router.navigateByUrl('invest-feature/main');
  }
}
