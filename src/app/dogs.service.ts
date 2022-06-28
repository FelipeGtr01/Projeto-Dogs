import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOGS } from './dogs';

@Injectable({
  providedIn: 'root'
})
export class DOGSService {

  apiUrl = "https://random.dog/woof.json";

  constructor(private httpClient: HttpClient) { }

  getDogs(): Observable<DOGS> {
    return this.httpClient.get<DOGS>(this.apiUrl)
  }
} 