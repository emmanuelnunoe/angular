import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../../models/post';
@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.css'],
})

// este componente se encargara de mostrar los post
export class ListadoPostsComponent implements OnInit {
  constructor(private postService: PostService) {}

  posts: Post[] = []; // importante inicializar
  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.getPosts().subscribe((result) => (this.posts = result));
    // me suscribo
  }
}
