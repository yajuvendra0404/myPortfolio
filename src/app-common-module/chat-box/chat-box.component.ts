import { Component } from '@angular/core';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
// <i class="fa-solid fa-message-quote"></i>
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  faMessage = faMessage;
}
