import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../model/employee.model";
import {PersonModel} from "../model/person.model";

@Injectable()
export class FacesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('https://fakestoreapi.com/products')
  }
}
