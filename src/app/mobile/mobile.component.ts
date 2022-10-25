import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input() ref: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}