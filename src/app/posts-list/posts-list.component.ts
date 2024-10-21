import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
    @Input() usersChild: any;
    postListUsers: any;
    postListPosts: Array<any> = [];

    constructor( private userServiceDI: UserService, private postServiceDI: PostService ) {
      this.postListUsers = userServiceDI
      // this.postListPosts = postServiceDI.posts
      this.postListPosts = postServiceDI.getPost()
      // this.postListUsers = new UserService();
    }

    addPost(){
      let postData = {
        id: 7,
        title: 'Post Title 7',
        post: 'Dummy Post 7'
      }

      this.postServiceDI.addPost(postData)
    }

    deletePost(){
      this.postServiceDI.deletePost()
    }
  }
