'use strict';

app.factory('SuspectService', function ($http) {

    return {
        getSuspects: function () {
            return $http.get('../datarequestapi/cm01/suspects');
        },
        connectSuspectsToMessage: function (data) {
            return $http.post('../datarequestapi/cm01/suspects', data);
        }
    }

});