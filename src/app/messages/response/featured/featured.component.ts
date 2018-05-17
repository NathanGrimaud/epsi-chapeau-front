import { Component, OnInit } from '@angular/core';
import featured from '../../../fixtures/featured';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  constructor() {}
  featured = featured;
  ngOnInit() {}
  public move(url:string){
    window.location.href = url
  }
}
