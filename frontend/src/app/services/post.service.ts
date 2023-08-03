import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  selectedPost: Post;
  readonly URL = 'http://localhost:3000/api/post';
  constructor(private http: HttpClient) { 
    this.selectedPost = new Post();
  }

  getPosts(){
    return this.http.get(this.URL);
  }

  postPosts(post: Post){
    return this.http.post(this.URL, post);
  }

  putPost(post: Post){
    return this.http.put(this.URL, post);
  }

  deletePost(id: string){
    return this.http.delete(this.URL + '/' + id);
  }

}
