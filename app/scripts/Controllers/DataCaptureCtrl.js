'use strict';

app.controller('DataCaptureCtrl', ["$scope", "$http", "$state", "CM01Service", function ($scope, $http, $state, CM01Service) {

    $scope.caseClassifications = CM01Service.caseClassifications();

    $scope.CM01Form = CM01Service.CM01Form;

    $scope.caseClassifications.connectClassification = function () {

        var data = $scope.CM01Form;
        console.log(data);
        // CM01Service
        //     .connectClassificationToMessage(data)
        //     .then(function () {
                $state.go('create.start.cm01.send-message');
            // });

    };


}]);
