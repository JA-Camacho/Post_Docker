import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  fechaActual: string;
  constructor(
    private datePipe: DatePipe,
    private router: Router,
    public postService: PostService
  ){
    this.fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }
  titulo = '';
  contenido = '';
  subir() {
    const ID = localStorage.getItem('ID') || '';
    const autor = localStorage.getItem('autor') || '';
    let post = new Post(ID,autor,this.titulo,this.contenido,this.fechaActual,this.fechaActual);
    this.postService.postPosts(post).subscribe((res) => {
      this.router.navigate(['/']);
    })
  }
}
