import { SharedService } from '@common-module/shared-services/shared.service';
import { Component } from '@angular/core';
// import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent {
  toggleChatArea: boolean = false;
  constructor (private _sharedService : SharedService){
    this._sharedService.toggleChatAreaSubject.subscribe( data  => {
      this.toggleChatArea = data;
    });
  }
}
