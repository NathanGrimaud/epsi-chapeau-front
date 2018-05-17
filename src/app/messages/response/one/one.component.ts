import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  constructor() {}
  @Input('message') message: string;
  @Input('side') side: string;
  @Input('sender') sender: string;
  ngOnInit() {}
}
