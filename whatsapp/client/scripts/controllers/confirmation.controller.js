angular
  .module('Whatsapp')
  .controller('ConfirmationCtrl', ConfirmationCtrl);

  function ConfirmationCtrl($scope, $reactive, $state, $ionicPopup, $log) {
    $reactive(this).attach($scope);

    this.phone = $state.params.phone;
    this.confirm = confirm;

    //////////////////
  }