import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userName = new Subject<string>();

  constructor(private http:HttpClient) { }

  
}
