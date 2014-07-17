'use strict';

app.controller('SendMessageModalCtrl', function ($scope, $modalInstance) {


    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };



});

