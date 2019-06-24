import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../../models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  private color: string;
  private buttonText: string;

  constructor() { }

  ngOnInit() {
    this.setServerAction(this.server.online);
  }

  toggleStatus() {
    this.setServerAction(!this.server.online);
  }

  setServerAction(isOnline: boolean) {
    if (isOnline) {
      this.server.online = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    } else {
      this.server.online = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }
  }

}
