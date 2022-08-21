import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { FormsModule } from '@angular/forms';
import { UsersUpdateComponent } from './components/users-update/users-update.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersAddComponent,
    UsersUpdateComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
  ],
  exports:[
    UsersListComponent,
    UsersAddComponent,
    FormsModule,
  ],
  providers:[
    UsersService
  ],
  bootstrap:[
    UsersListComponent
  ]
})
export class UsersModule { }
