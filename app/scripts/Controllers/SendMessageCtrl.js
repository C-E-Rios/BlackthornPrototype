'use strict';

app.controller('SendMessageCtrl', ["$scope", "$modal", "$state", "$timeout", "CM01Service", function ($scope, $modal, $state, $timeout, CM01Service) {

    $scope.sendMessage = function () {

        $('body').removeClass('pending');
        var data = '"'+CM01Service.CM01Form.Id+'"';
        CM01Service
            .connectIdToMessage(data)
            .then(function () {
                $scope.messageSendModal();
                $timeout(function () {
                    $state.go('create');
                }, 1000);
            })
        
    };


    $scope.messageSendModal = function (){
        var modalInstance = $modal.open({
            templateUrl: '../TWIF/Scripts/App/Ng-Views/Create/SendMessageModal.html',
            controller: 'SendMessageModalCtrl',
            resolve: {
            }
        });
    };



}]);


