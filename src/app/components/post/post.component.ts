import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { Posts } from '../../models/posts.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnChanges {
  @Input() postsData: Posts[] = [];
  users: User[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnChanges() {
    this.getUsers();
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
  }

  getUsername(userId: string | null): string {
    const user = this.users.find((user) => user.id == userId);
    return user ? user.username : 'Unknown User';
  }

  viewPost(post: any) {
    this.dialog.open(PostDialogComponent, {
      data: post,
    });
  }
}
