import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$ = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService, private _httpClient: HttpClient) {
  }

  remove(id: string) {
    this._employeeService.delete(id).subscribe();

  }
}
