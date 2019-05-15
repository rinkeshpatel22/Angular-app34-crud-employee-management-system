import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { IempGetRes } from '../interfaces/iemp-get-res';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://dummy.restapiexample.com/api/v1/';

  public getEmp(): Observable<IempGetRes[]> {
    return this.httpClient.get(this.apiUrl + 'employees')
      .pipe(map((res: IempGetRes[]) => res));
  }

  public deletEmp(id): Observable<any> {
    return this.httpClient.delete(this.apiUrl + 'delete/' + id)
      .pipe(map((res: any) => res));
  }

  public createEmp(formData): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'create', formData.data)
      .pipe(map((res: any) => res));
  }

  public editEmp(formData): Observable<any> {
    return this.httpClient.put(this.apiUrl + 'update/' + formData.id, formData.empData.data)
      .pipe(map((res: any) => res));
  }
}
