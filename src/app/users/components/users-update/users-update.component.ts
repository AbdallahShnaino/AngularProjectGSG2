import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router , Route, ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/users/Models/User.model';
import { UsersService } from 'src/app/users/services/users.service';
FormsModule
@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {
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
    private route: ActivatedRoute
  ) {
    this.getUserId()
    this.inflateData(this.user.id)
  }

  ngOnInit(): void {


  }
  onFormSubbmited() :void{
    this.usersService.updateUser(this.user.id , this.user)
    this.router.navigate(['users/view']);
  }
  
  getUserId () {
    this.route.queryParamMap
    .subscribe((params) => {
      this.user.id = params.get('id')!
    }
  );
  }

  inflateData (id : string) :void {
    var inflatedUser = this.usersService.getUserById(id)
    if (typeof inflatedUser !== 'number'){
      this.user.firstName = inflatedUser.firstName
      this.user.lastName = inflatedUser.lastName
      this.user.address = inflatedUser.address
      this.user.phoneNumber = inflatedUser.phoneNumber
      this.user.emailAddress = inflatedUser.emailAddress
      this.user.postion = inflatedUser.postion
      this.user.age = inflatedUser.age
    }
  }


}
