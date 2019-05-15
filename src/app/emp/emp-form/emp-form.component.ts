import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgModel, NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  @Input() private empEditData: any;
  @Output() public formSubmitEvent = new EventEmitter<any>();

  public empFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.empFormGroup = this.formBuilder.group({
      name: [''],
      salary: [''],
      age: ['']
    });

    // if editForm then fill the existing values in form
    if (this.empEditData) {
      this.empFormGroup.patchValue({
        name: this.empEditData.employee_name,
        salary: this.empEditData.employee_salary,
        age: this.empEditData.employee_age
      });
    }
  }

  onFormSubmit(): void {
    this.formSubmitEvent.emit({ data: this.empFormGroup.value });
  }
}
