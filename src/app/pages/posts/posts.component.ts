import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PostComponent } from '../../components/post/post.component';
import { TableComponent } from '../../components/table/table.component';
import { Posts } from '../../models/posts.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent, TableComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  postsData: Posts[] = [];
  userId: string | null = null;
  displayedColumns: String[] = ['title', 'username', 'actions'];
  users: User[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchPosts().subscribe((data) => {
      this.postsData = data;
      this.getUsers();
    });
  }

  getUsers() {
    this.dataService.fetchUsers().subscribe((data) => {
      this.users = data;
      this.addUsernamesToPosts();
    });
  }

  addUsernamesToPosts() {
    this.postsData = this.postsData.map((post) => ({
      ...post,
      username: this.getUsername(post.userId),
    }));

    console.log(this.postsData);
  }

  getUsername(userId: string | null): string {
    const user = this.users.find((user) => user.id == userId);
    return user ? user.username : 'Unknown User';
  }
}
