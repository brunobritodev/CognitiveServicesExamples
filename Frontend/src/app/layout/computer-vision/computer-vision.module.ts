import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyseImageComponent } from './analyse/analyse.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComputerVisionService } from './computer-vision.service';

const routes: Routes = [
  {
      path: '',
      component: AnalyseImageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule],
  declarations: [AnalyseImageComponent],
  providers: [
    ComputerVisionService
  ]
})
export class ComputerVisionModule { }
