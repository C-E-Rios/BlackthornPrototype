'use strict';

app.controller('MessageTypeCtrl', ["$scope", "$rootScope", "allMessageTypes", "CM01Service", function ($scope, $rootScope, allMessageTypes, CM01Service) {

    $scope.messages = {
        list: allMessageTypes
    };


}]);

