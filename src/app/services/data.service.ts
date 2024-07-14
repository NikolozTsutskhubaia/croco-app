import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Posts } from '../models/posts.model';
import { environment } from '../../environment/enviornemnt';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/users`);
  }

  fetchPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${environment.baseUrl}/posts`);
  }

  fetchTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/todos`);
  }
}
