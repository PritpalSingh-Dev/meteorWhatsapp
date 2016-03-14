angular
  .module('Whatsapp')
  .service('NewChat', NewChat);

  function NewChat($rootScope, $ionicModal){
    let templateUrl = 'client/templates/new-chat.html';

    this.showModal = showModal;
    this.hideModal = hideModal;
  }