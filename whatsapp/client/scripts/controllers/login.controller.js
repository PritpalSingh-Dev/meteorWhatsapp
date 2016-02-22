angular
  .module('Whatsapp')
  .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($scope, $reactive, $ionicLoading, $ ionicPopup, $log) {
$reactive(this).attach($scope);

this.login = login;
  }