import { Component } from '@angular/core';

import { AddFriendPage } from '../add-friend/add-friend';
import { ChatPage } from '../chat/chat';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddFriendPage;
  tab2Root = ChatPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
