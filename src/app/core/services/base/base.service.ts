import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseURL: string;

  constructor() {
    this.baseURL = environment.baseURL;
  }
}
