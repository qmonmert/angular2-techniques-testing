import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  constructor(private http: Http) { }

  getJoke() {
    return this.http.get("http://api.icndb.com/jokes/random").map((res: Response) => res.json().value.joke);
  }

}
