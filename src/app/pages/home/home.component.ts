import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TableComponent } from '../../components/table/table.component';
import { User } from '../../models/user.model';
import { Posts } from '../../models/posts.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  userData: User[] = [];
  postsData: Posts[] = [];
  displayedColumns: String[] = ['name', 'email', 'phone', 'company', 'actions'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchUsers().subscribe((data) => {
      this.userData = data;
    });
  }
}
