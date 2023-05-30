import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DonationService } from './donation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
  table: any;
  searchTerm: string = '';
  user: any;
  button1: any = true;
  button2: any = false;
  id: any;
  userId: any;
  updatedUser: any;
  formdata: FormGroup;

  constructor(private donation: DonationService) {
    this.formdata = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getdalldata();
  }

  getdalldata() {
    this.donation.getAllData().subscribe((data) => {
      console.log(data);
      this.table = data;
    });
  }

  submit() {
    this.donation.donate(this.formdata.value).subscribe((data: any) => {
      console.log(data);
      this.getdalldata();
      this.formdata.reset();
    });
  }

  delete(id: any) {
    this.donation.deleteUser(id).subscribe((id: any) => {
      console.log(id);
      this.getdalldata();
    });
  }

  editUser(demo: any) {
    console.log(demo);
    this.id = demo.id; // Set the id property
    this.formdata.patchValue({
      name: demo.name,
      email: demo.email,
      address: demo.address,
      amount: demo.amount
    });
    this.button2 = true;
    this.button1 = false;
    this.getdalldata();
  }

  updateUser() {
    const userDetails = this.formdata.value; // Get the updated user details from formdata
    this.donation.updateUser(this.id, userDetails).subscribe((data: any) => {
      console.log(data);
      this.getdalldata(); // Update the table data after successfully updating the user
      this.formdata.reset(); // Reset the form
      this.button2 = false;
      this.button1 = true;
    });
  }
}
