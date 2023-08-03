import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: Post[] = [];
  constructor(
    public postService:PostService
  ) {}
  ngOnInit(): void {
   this.getPosts(); 
  }

  getPosts(){
    this.postService.getPosts().subscribe((res) =>{
      this.posts = res as Post[];
      console.log(this.posts);
    })
  }
}
