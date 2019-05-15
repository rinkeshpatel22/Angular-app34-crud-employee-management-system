import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './emp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmpComponent, EmpDetailsComponent, EmpFormComponent],
  exports: [EmpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EmpModule { }
