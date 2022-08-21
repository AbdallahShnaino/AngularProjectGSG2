import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/users/Models/User.model';
import { UsersService } from 'src/app/users/services/users.service';
FormsModule
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  user:User =  {
    firstName: '',
    id: '',
    lastName: '',
    age: 0,
    emailAddress: '',
    phoneNumber: '',
    address: '',
    postion: ''
  }
  constructor(
    public usersService:UsersService ,
    public router:Router ,
  ) {
    
  }

  ngOnInit(): void {


  }
  onFormSubbmited() :void{
    this.usersService.addUser(this.user)
    this.router.navigate(['users/view']);
  }


}
