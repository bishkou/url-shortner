import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  urlForm: FormGroup;
  postData = new FormData();
  disp = false;
  url = 'http://dailygads.com/';


  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(): void {
    this.urlForm = new FormGroup({
      url: new FormControl('', Validators.required),
      slug: new FormControl(''),
    });
  }

  onSubmit(){
    const url = this.urlForm.get('url').value;
    const slug = this.urlForm.get('slug').value;

    this
      .http.post('http://localhost:3000/url', {url, slug}).subscribe((data) => {
      console.log(data);
    });
    this.disp = true;
    if (slug){
      this.url += slug;
    }
  }

}
