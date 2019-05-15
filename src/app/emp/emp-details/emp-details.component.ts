import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IempGetRes } from '../../interfaces/iemp-get-res';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent{
  @Input() private employee: IempGetRes;
  @Output() private deleteEvent = new EventEmitter<any>();
  @Output() private editEvent = new EventEmitter<any>();
  @Output() private closeEvent = new EventEmitter<any>();
  public isEditFormOpen = false;

  constructor(private empService: EmpService) { }

  onClickDelete(): void {
    this.deleteEvent.emit();
  }
  editFormSubmit(data): void {
    this.editEvent.emit({ empData: data, id: this.employee.id });
  }
  onClickClose(): void {
    this.closeEvent.emit();
  }
}
