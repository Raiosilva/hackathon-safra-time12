import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { Labels } from 'src/static/labels';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    agencia: ['', [Validators.required, Validators.minLength(4)]],
    conta: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  public loading: boolean = false;
  public label = Labels.getLabels();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  public validFields(value: any) {
    if (value && value.agencia == '') {
      this.loginForm.get('agencia')?.setErrors({ errorAgencia: true });
    }

    if (value && value.conta == '') {
      this.loginForm.get('conta')?.setErrors({ errorConta: true });
    }

    if (value && value.password == '') {
      this.loginForm.get('password')?.setErrors({ errorPassword: true });
    }
  }

  public onSubmit() {
    this.loading = true;
    const value = this.loginForm.getRawValue();
    this.validFields(value);
    if (value &&
      value.agencia
      && value.conta
      && value.password
    ) {
      if (
        value.agencia == '123456'
        && value.conta == '123456'
        && value.password == '123456'
      ) {
        this.router.navigateByUrl('invest-feature/invest');
        this.authService.set("bank_account", value.conta)
        this.loginOkNotification(value.conta);
        this.loading = false;
      } else {
        this.loginErrorNotification('Verifique a Senha, Agência, Conta podem conter error!');
        this.loading = false;
      }
    }
  }

  private loginOkNotification(u: any) {
    this.snackBar.open(
      'Logged in successfuly. Welcome ' + u + '!', 'OK',
      { duration: 2000 }
    );
  }

  private loginErrorNotification(err: any) {
    this.snackBar.open(err, 'OK', { duration: 2000 });
  }
}
