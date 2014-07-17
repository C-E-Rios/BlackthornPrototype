'use strict';

app.factory('CM01Service', function ($http) {


    var CM01Form = {
        Id: "",
        SuspectIds: [],
        CaseForm: {
            CaseOutline: {
                CaseOutlineDetail: [
                    {
                        Type: '',
                        Narrative: ''
                    }
                ]
            },
            OfficerCompletingDetails: [
                {
                    Title: '',
                    OtherTitle: '',
                    TelephoneType: '',
                    TelephoneNumber: '',
                    Extension: '',
                    EmailAddress: '',
                    WarrantNumber: ''
                }
            ],
            SupervisingOfficerDetails: [
                {
                    Title: '',
                    OtherTitle: '',
                    TelephoneType: '',
                    TelephoneNumber: '',
                    Extension: '',
                    EmailAddress: '',
                    WarrantNumber: '',
                    Narrative: ''
                }
            ],
            AssociatedInvestigation: null,
            CommunicationType: null
        }

    }


    // Suspects ================================
    var allSuspects;

    var selectedSuspects = {
        list: []
    };

    var getSuspects = function () {
        if (allSuspects) {
            return allSuspects;
        } else {
            return $http.get('scripts/Data/Suspects.js').success(function (data) {
                allSuspects = data;
            });
        }
    };

    // Data Capture ================================

    var CM01Data = null;

    var getCM01Data = function () {
        return $http.get('scripts/Data/CM01Data.json').success(function (data) {
            CM01Data = data;
        });
    }

    return {

        CM01Form: CM01Form,

        getSuspects: getSuspects,
        allSuspects: function () {
            return {
                list: allSuspects
            }
        },
        selectedSuspects: selectedSuspects,
        connectSuspectsToMessage: function (data) {
            return $http.post('../datarequestapi/cm01/suspects', data);
        },

        getCM01Data: getCM01Data,
        CM01Data: function() {
            return CM01Data
        },
        connectCM01DataToMessage: function (data) {
            return $http.post('../datarequestapi/cm01/datacapture', data);
        },
        connectIdToMessage: function (data) {
            return $http.post('../datarequestapi/cm01/send', data);
        }

    }

});