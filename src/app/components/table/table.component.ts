import {
  Component,
  Input,
  OnChanges,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCard } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { Posts } from '../../models/posts.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatToolbarModule,
    MatCard,
    MatProgressSpinner,
    MatButton,
    MatFormField,
    MatInput,
    MatInputModule,
    FormsModule,
    MatPaginator,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data: User[] | Posts[] = [];
  @Input() displayedColumns: String[] = [];
  @Input() tableType: String = '';
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  searchTerm: string = '';
  dataSource = new MatTableDataSource<User | Posts>();
  isLoadingResults = true;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.dataSource.data = this.data;
    this.isLoadingResults = false;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewPost(userId: number) {
    this.router.navigate(['/posts', userId]);
  }

  viewTodos(userId: number) {
    this.router.navigate(['/todos', userId]);
  }

  viewPostPopup(post: any) {
    this.dialog.open(PostDialogComponent, {
      data: post,
    });
  }
}
