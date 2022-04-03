import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FiveScreenComponent } from '../components/five-screen/five-screen.component';
import { FourScreenComponent } from '../components/four-screen/four-screen.component';
import { IndexComponent } from '../components/index/index.component';
import { SecondaryScreenComponent } from '../components/secondary-screen/secondary-screen.component';
import { ThirdScreenComponent } from '../components/third-screen/third-screen.component';
import { MainRoutingModule } from './invest-feature-routing.module';
import { InvestFormComponent } from './invest-form/invest-form.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    InvestFormComponent,
    MainComponent,
    IndexComponent,
    SecondaryScreenComponent,
    ThirdScreenComponent,
    FourScreenComponent,
    FiveScreenComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MainRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule
  ],
  exports: [
    // MatInputModule,
    // MatFormFieldModule
  ],
})
export class InvestModule { }
