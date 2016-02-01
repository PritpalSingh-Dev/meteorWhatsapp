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

    
  }