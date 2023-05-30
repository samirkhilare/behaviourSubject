import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  userName: string = "samir"

  constructor(private user: UserServiceService) {
    this.user.userName.subscribe(res => {
      this.userName = res;
    })
  }


  onChange(uname: any) {
    console.log(uname.value);
    this.user.userName.next(uname.value)
    uname.value = '';
  }
}
