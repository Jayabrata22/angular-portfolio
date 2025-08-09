import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesBackgroundComponent } from './particles-background/particles-background.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ParticlesBackgroundComponent,
    AnimatedTextComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    ParticlesBackgroundComponent,
    AnimatedTextComponent
  ]
})
export class SharedModule { }