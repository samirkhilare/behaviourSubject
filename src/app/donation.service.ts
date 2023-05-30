import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
url= 'http://localhost:3000/donation/'

  constructor(private http: HttpClient) { }

donate(data:any){
 return this.http.post(this.url,data)
}
getAllData(){
  return this.http.get(this.url)
}
deleteUser(id: any) {
  const urlWithId = `${this.url}/${id}`;
  return this.http.delete(urlWithId);
}

updateUser(id: any, userDetails: any) {
  const urlWithId = `${this.url}/${id}`;
  return this.http.put(urlWithId, userDetails);
}


}