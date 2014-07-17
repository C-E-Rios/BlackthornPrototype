'use strict';

app.controller('HeaderCtrl', ["$scope", "$location", function ($scope, $location) {

    /* Nav-bar active class */

    $scope.isActive = function (viewLocation) {
        var s = false;
        if ($location.path().indexOf(viewLocation) !== -1) {
            s = true;
        }
        return s;
    };

    /* / */

}]);
