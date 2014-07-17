'use strict';

app.factory('MessageTypeService', function ($http) {

    return {
        getMessageTypes: function () {
            return $http.get('scripts/Data/MessageTypes.js');
        }
    }




});