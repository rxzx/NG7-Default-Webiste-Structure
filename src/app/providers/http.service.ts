import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpServiceProvider {
  private baseUrl = '/';
  constructor(
    private http: HttpClient
  ) {
  }
  getData() {
    return this.http.get(`${this.baseUrl}assets/sitedata.json`);
    // return this.http.get('../sitedata.json');

  }

  


}