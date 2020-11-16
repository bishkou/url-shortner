import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrls: ['./slug.component.css']
})
export class SlugComponent implements OnInit {

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const slug =  this.router.url.slice(1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    };
    this
      .http.get('http://dailygads.com/url/' + slug, httpOptions).subscribe(data => {
      // @ts-ignore
      document.location.href = data.url;
    });
  }

}
