import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChoosyConfig } from 'choosy';
import { map } from 'rxjs/operators';
import { ChoosyDemoBaseComponent } from '../base';

@Component({
  selector: 'doc-autocomplete',
  templateUrl: './autocomplete.component.html',
  styles: []
})
export class AutocompleteComponent extends ChoosyDemoBaseComponent implements OnInit {
  movieAPI = 'https://api.themoviedb.org/3/search/movie?api_key=5196210df0fccdb5daf8e9f496563de3&query=';
  options = [];
  config: ChoosyConfig = {
    search: {
      keys: ['value.title']
    },
    autoComplete: {
      enable: true
    }
  };
  constructor(private http: HttpClient) {
    super();
  }
  ngOnInit() {}
  fetchMovies(keyword) {
    return this.http.get(this.movieAPI + keyword).pipe(map((res: any) => res.results));
  }
}
