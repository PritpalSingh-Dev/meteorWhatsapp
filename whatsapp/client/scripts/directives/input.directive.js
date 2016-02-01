angular
  .module('Whatsapp')
  .directive('input', input);

  function input ($timeout) {
    return {
      restrict: 'E',
      scope: {
        'returnClose' : '=',
        'onReturn' : '&',
        'onFocus' : '&',
        'onBlur' : '&'
      },
      link:link
    };

function link(scope, element, attrs) {
  element.bind('focus', function (e) {
    if(!scope.onFocus) return;

    $timeout(function () {
      scope.onFocus;
    })
  })


}

  }