import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PostComponent } from '../../components/post/post.component';
import { Posts } from '../../models/posts.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  postsData: Posts[] = [];
  userId: string | null = null;
  users: User[] = [];
  name: String | undefined = '';
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('userId');
      this.userId
        ? this.dataService.fetchPosts().subscribe((data) => {
            this.postsData = data.filter((post) => post.userId == this.userId);
          })
        : console.warn('User ID is null or undefined.');
    });
    this.getUsers();
  }

  getUsers() {
    this.dataService.fetchUsers().subscribe((data) => {
      this.users = data;
      this.name = this.getName();
    });
  }

  getName() {
    const filteredUsers = this.users.find((user) => user.id == this.userId);
    return filteredUsers?.name;
  }
}
