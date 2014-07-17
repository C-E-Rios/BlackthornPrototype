'use strict';

app.controller('DataCaptureCtrl', ["$scope", "$http", "$state", "CM01Service", function ($scope, $http, $state, CM01Service) {

    $scope.CM01Data = CM01Service.CM01Data();

    $scope.CM01Form = CM01Service.CM01Form;

    $scope.OfficerCompletingTitleIsOther = false;

    $scope.$watch('CM01Form.CaseForm.OfficerCompletingDetails.Title', function (newValue, oldValue) {
        if (newValue === "Other") {
            $scope.OfficerCompletingTitleIsOther = true;
        } else {
            if ($scope.CM01Form.CaseForm){
                $scope.CM01Form.CaseForm.OfficerCompletingDetails.OtherTitle = null;
            }
            $scope.OfficerCompletingTitleIsOther = false;
        }
    });

    $scope.CM01Data.connectCM01Data = function () {

        var data = $scope.CM01Form;
        console.log(data);
        // CM01Service
        //     .connectClassificationToMessage(data)
        //     .then(function () {
                $state.go('create.start.cm01.send-message');
            // });

    };


}]);
