import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    userId: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.loading = true;
    const value = this.loginForm.getRawValue();
    console.log('value: ', value);
    if (value.userId === 'teste' && value.password == '123456') {
      this.router.navigateByUrl('invest-feature/invest');
      this.loginOkNotification('u!');
      this.loading = false;
    } else {
      this.loginErrorNotification('error');
      this.loading = false;
    }
  }

  private loginOkNotification(u: any) {
    this.snackBar.open(
      'Logged in successfuly. Welcome ' + u.firstname + '!', 'OK',
      { duration: 2000 }
    );
  }

  private loginErrorNotification(err: any) {
    this.snackBar.open(err, 'OK', { duration: 2000 });
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
}
