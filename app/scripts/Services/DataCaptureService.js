'use strict';

app.factory('DataCaptureService', function ($http) {

    return {
        getCaseClassificationData: function () {
            return $http.get('../TWIF/Scripts/App/Data/CaseClassifications.js');
        },
        connectClassificationToMessage: function (data) {
            return $http.post('../datarequestapi/cm01/datacapture', data);
        }
    }

});

