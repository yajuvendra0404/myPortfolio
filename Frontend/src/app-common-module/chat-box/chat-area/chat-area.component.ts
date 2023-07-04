import { SharedService } from '@common-module/shared-services/shared-services/shared.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gifs } from '@assets/gifs';
// import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent {
  toggleChatArea: boolean = false;
  subscptionStore: Subscription[] = [];
  underConstruction: String;
  constructor (
      private _sharedService : SharedService,
      private _gifs : Gifs
    ){
    this.underConstruction = _gifs.underConstruction;
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
