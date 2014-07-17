'use strict';

app.controller('SuspectCtrl', ["$scope", "$state", "CM01Service", "CommonModulesService", function ($scope, $state, CM01Service, CommonModulesService) {


    var self = this;

    $scope.CM01Form = CM01Service.CM01Form;

    // Load Suspect list from Cidre
    $scope.suspects = CM01Service.allSuspects();

    $scope.selectedSuspects = CM01Service.selectedSuspects;

    // Add a suspect to our selected items
    $scope.addSuspectItem = function (item) {
        var index = $scope.selectedSuspects.list.indexOf(item);
        if (index === -1) {
            $scope.selectedSuspects.list.push(item);
        }
        $scope.suspects.list[$scope.suspects.list.indexOf(item)].selected = true;
    };

    // Remove a suspect from the selected items
    $scope.removeSuspectItem = function (item) {
        var index = $scope.selectedSuspects.list.indexOf(item);
        if (index !== -1) {
            $scope.selectedSuspects.list.splice(index, 1);
        }
        $scope.suspects.list[$scope.suspects.list.indexOf(item)].selected = false;
    };

    // Save selected suspects


    $scope.suspects.connectSuspects = function () {
        if (!$scope.CM01Form.Id) {
            var generatedId = CommonModulesService.getNewUUID();
            $scope.CM01Form.Id = generatedId;
        }
        $scope.CM01Form.SuspectIds = self.formatSelectedSuspectsForSaving();
        var data = $scope.CM01Form;
        console.log(data);

        // CM01Service
            // .connectSuspectsToMessage(data)
            // .then(function () {
                $state.go('.additional-information');
            // });

    };

    this.formatSelectedSuspectsForSaving = function () {
        var formattedSuspects = [],
            selectedSuspects = $scope.selectedSuspects.list;
        angular.forEach(selectedSuspects, function (value, key) {
            formattedSuspects.push(value.SuspectId);
        });
        return formattedSuspects;
    };


}]);

