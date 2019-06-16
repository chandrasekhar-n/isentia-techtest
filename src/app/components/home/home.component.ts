import { Component, OnInit } from '@angular/core';
import {FeedService} from '../../services/feed.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any;
  searchForm: FormGroup;
  searchTerm$ = new Subject<string>();
  constructor(private feedService: FeedService, private fb: FormBuilder) {
    this.feedService.getFeed(this.searchTerm$)
      .subscribe(results => {
        this.images = results;
      });
  }
  searchTags() {
    this.searchTerm$.next(this.searchForm.value.search);
  }
  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.searchTerm$.next('');
  }

  // ngOnInit() {
  //   this.feedService.getFeed().subscribe((event: HttpEvent<any>) => {
  //     if (event.type === HttpEventType.Response) {
  //       this.images = event.body;
  //       console.log(this.images);
  //     }
  //   });
  // }

}
