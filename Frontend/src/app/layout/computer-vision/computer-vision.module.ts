import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerVisionComponent } from './computer-vision.component';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { ComputerVisionService } from './computer-vision.service';

const routes: Routes = [
  {
      path: '',
      component: ComputerVisionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule],
  declarations: [ComputerVisionComponent],
  providers: [
    ComputerVisionService
  ]
})
export class ComputerVisionModule { }
