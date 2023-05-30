import { Component,OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
userName:string = "Samir";
  constructor ( private user: UserServiceService) {}
  ngOnInit () {
    this.user.userName.subscribe(res =>{
this.userName = res;
    })
  }

}
