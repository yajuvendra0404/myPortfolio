import { Component } from '@angular/core';
import { faMessage, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { SharedService } from '@common-module/shared-services/shared.service';
// <i class="fa-solid fa-message-quote"></i>
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  faMessage = faMessage;
  faXmarkCircle = faXmarkCircle;
  toggleChatAreaButton : boolean = false;

  constructor(private _shareService: SharedService) {}
  onToggle (){
      this.toggleChatAreaButton == false ? this.toggleChatAreaButton = true: this.toggleChatAreaButton = false;
      this._shareService.toggleChatAreaSubject.next(this.toggleChatAreaButton);
  }
}
