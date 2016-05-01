angular
  .module('Whatsapp')
  .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl ($scope, $reactive, $state, $ionicPopup, $log) {
    $reactive(this).attach($scope);

    let user = Meteor.user();
    let name = user && user.profile ? user.profile.name : '';

    this.name = name;
    this.updateName = updateName;

  function updatePicture() {
    MeteorCameraUI.getPicture({ width: 60, height: 60 }, (err, data) => {
      if (err) return this.handleError(err);

      this.$ionicLoading.show({
        template: 'Updating picture...'
      });

      this.callMethod('updatePicture', data, (err) => {
        this.$ionicLoading.hide();
        this.handleError(err);
      });
    });
  }

  function updateName() {
    if (_.isEmpty(this.name)) return;

    Meteor.call('updateName', this.name, (err) => {
      if(err) return handleError(err);
      state.go('tab.chats');
    })
  }

  function handleError(err) {
    $log.error('profile save error', err);

    $ionicPopup.alert({
      title: err.reason || 'Save failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}