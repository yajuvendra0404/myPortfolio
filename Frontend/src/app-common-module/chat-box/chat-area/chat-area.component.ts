import { SharedService } from '@common-module/shared-services/shared-services/shared.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
// import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent {
  toggleChatArea: boolean = false;
  subscptionStore: Subscription[] = [];
  constructor (private _sharedService : SharedService){
    this.subscptionStore.push(
      this._sharedService.toggleChatAreaSubject.subscribe( data  => {
        this.toggleChatArea = data;
      })
    );
  }
  ngDestory(){
    this.subscptionStore.forEach( ele => {
      ele.unsubscribe();
    })
  }
}
