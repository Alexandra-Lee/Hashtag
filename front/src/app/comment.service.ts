import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Comment {
  id: String;
  username: String;
  comment_message: String;
}
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get(`${this.uri}/comments`);
  }

  getCommentById(id) {
    return this.http.get(`${this.uri}/comments/${id}`);
  }

  addComment(username, comment_message) {
    const comment = {
      username: username,
      comment_message: comment_message,
    };
    return this.http.post(`${this.uri}/comments/add`, comment);
  }

  updateComment(id, username, comment_message) {
    const comment = {
      username: username,
      comment_message: comment_message,
    };
    return this.http.post(`${this.uri}/comments/update/${id}`, comment);
  }

  deleteComment(id) {
    return this.http.get(`${this.uri}/comments/delete/${id}`);
  }
}

