'use strict';

app.directive('messageType', function ($state, $stateParams, CM01Service) {


    return {

        restrict: 'ACE',

        templateUrl: 'scripts/Directives/Templates/MessageTypeContainer.html',

        link: function (scope, element, attrs) {

            function redirectToMessageType() {

                $state.transitionTo('create.start' + scope.message.state, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                CM01Service.CM01Form = {};
                var selectedSuspects = CM01Service.selectedSuspects.list;
                angular.forEach(selectedSuspects, function (value, key) {
                    value.selected = false;
                });
                CM01Service.selectedSuspects = {
                    list: []
                };
            }

            $(element).on('click', function (e) {
                scope.$apply(redirectToMessageType);
            });
        }

    };

});