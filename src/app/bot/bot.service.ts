import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private http:HttpClient) { }

  getLocation(){
    return this.http.get(`${environment.backendUlr}/location`)
  }
}
