import { Component, OnInit } from '@angular/core';
import { Server } from '../../../models/server';

const SAMPLE_SERVER: Server[] = [
  {id: 1, name: 'prod-web', online: true},
  {id: 1, name: 'qa-web', online: false},
  {id: 1, name: 'dev-web', online: true}
];

@Component({
  selector: 'app-sectionhealth',
  templateUrl: './sectionhealth.component.html',
  styleUrls: ['./sectionhealth.component.css']
})
export class SectionhealthComponent implements OnInit {

  public server: Server[] = SAMPLE_SERVER;
  constructor() { }

  ngOnInit() {
  }

}
