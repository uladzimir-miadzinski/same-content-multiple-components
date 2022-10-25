import { Component, OnInit, Input, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  @Input() ref: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}