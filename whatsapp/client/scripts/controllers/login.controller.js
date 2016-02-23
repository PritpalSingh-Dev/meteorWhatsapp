angular
.module('Whatsapp')
.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $ionicLoading, $ ionicPopup, $log) {
  $reactive(this).attach($scope);

  this.login = login;

  function login(){
    if (_.isEmpty(this.phone)) return;

    let confirmPopup = $ionicPopup.confirm({
      title: 'Number confirmation',
      template: '<div>' + this.phone + '</div><div>Is this your phone number above correct?</div>',
      cssClass: 'text-center',
      okText: 'Yes',
      okType: 'button-positive button-clear',
      cancelText: 'edit',
      cancelType: 'button-dark button-clear'
    });

    confirm.Popup.then((res) => {
      if (!res) return;

      $ionicLoading.show({
        template: 'Sending verification code...'
      });

      Accounts.requestPhoneVerification(this.phone, (err) => {
        $ionicLoading.hide();

        if (err) {
          return handleError(err);
        }

        $state.go('confirmation', {phone: this.phone});
      });
    });
  }

  function handleError(err) {
    $log.error('Login error ', err);

    $ionicPopup.alert({
      title: err.reason || 'Login failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}