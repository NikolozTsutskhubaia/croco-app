import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts.component').then((mod) => mod.PostsComponent),
  },
  {
    path: 'posts/:userId',
    loadComponent: () =>
      import('./pages/user/user.component').then((mod) => mod.UserComponent),
  },
  {
    path: 'todos/:userId',
    loadComponent: () =>
      import('./pages/todos/todos.component').then((mod) => mod.TodosComponent),
  },
];
