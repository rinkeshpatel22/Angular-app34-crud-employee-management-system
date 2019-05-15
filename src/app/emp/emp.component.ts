import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { IempGetRes } from '../interfaces/iemp-get-res';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public empList: IempGetRes[];
  public isLoading = true;
  public isDetailsOpen = false;
  public empDetailsId: number;

  constructor(private empService: EmpService) { }

  ngOnInit() {
    this.getEmpList();
  }

  getEmpList(): void {
    this.empService.getEmp().subscribe(
      res => {
        this.empList = res;
        this.isLoading = false;
      },
      error => {
        alert(error);
        this.isLoading = false;
      }
    );
  }

  deleteEmp(id): void {
    this.empService.deletEmp(id)
      .subscribe(
      res => {
        alert(res.success.text);
        this.isLoading = true;
        this.getEmpList();
      },
      error => { alert('Delete employee failed' + error); }
      );
  }

  createEmp(data): void {
    this.empService.createEmp(data).subscribe(
      res => {
        alert('employee created');
        this.isLoading = true;
        this.getEmpList();
      },
      error => { alert('Create employee failed' + error); }
    );
  }

  editEmp(data): void {
    this.empService.editEmp(data).subscribe(
      res => {
        alert('employee Edited');
        this.isLoading = true;
        this.getEmpList();
      },
      error => { alert('Edit employee failed' + error); }
    );
  }
}
