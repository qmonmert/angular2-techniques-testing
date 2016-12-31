import { Component, OnInit } from '@angular/core';
import { JokeService } from './../joke.service';

@Component({
  selector: 'app-joke',
  template: `
    <h2>{{title}}</h2>
    <p>{{joke}}</p>
    <button (click)="getJoke()">New joke</button>
  `
})
export class JokeComponent implements OnInit {

  joke: string;
  title: string = 'Chuck Norris Jokes';

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke().subscribe((joke: string) => this.joke = joke);
  }

}
