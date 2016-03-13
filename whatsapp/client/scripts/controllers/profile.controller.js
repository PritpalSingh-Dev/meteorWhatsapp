angular
  .module('Whatsapp')
  .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl ($scope, $reactive, $state, $ionicPopup, $log) {
    $reactive(this).attach($scope);

    let user = Meteor.user();
    let name = user && user.profile ? user.profile.name : '';

    this.name = name;
    this.updateName = updateName
  }