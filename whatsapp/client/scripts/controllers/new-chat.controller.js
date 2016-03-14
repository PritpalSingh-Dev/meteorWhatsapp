angular
.module('Whatsapp')
.controller('NewChatCtrl', NewChatCtrl);

function NewChatCtrl($scope, $reactive, $state, NewChat) {
  $reactive(this).attach($scope);

  this.hideNewChatModal = hideNewChatModal;
  this.newChat = newChat;
}