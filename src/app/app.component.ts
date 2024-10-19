import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { doesNotMatch } from 'assert';
import { PostsListComponent } from "./posts-list/posts-list.component";
import { UserComponent } from "./user/user.component";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsListComponent, UserComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-services';

  userService: any;

  constructor() {
    this.userService = new UserService();
    console.log(this.userService)
  }
}
