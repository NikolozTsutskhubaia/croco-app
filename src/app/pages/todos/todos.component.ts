import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Todos } from '../../models/todos.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: Todos[] = [];
  userId: string | null = null;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('userId');
      this.userId
        ? this.dataService.fetchTodos().subscribe((data) => {
            this.todos = data.filter((todo) => todo.userId == this.userId);
          })
        : console.warn('User ID is null or undefined.');
    });
    console.log(this.todos);
  }
}
