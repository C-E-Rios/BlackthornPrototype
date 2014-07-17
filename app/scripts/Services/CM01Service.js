'use strict';

app.factory('CM01Service', function ($http) {


    var CM01Form = {
        Id: "",
        SuspectIds: [],
        CaseForm: {
            CaseOutline: {
                CaseClassification: [],
                CaseOutlineDetail: {}
            },
            OfficerCompletingDetails: null,
            SupervisingOfficerDetails: null,
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

    var caseClassifications = null;

    var getCaseClassificationData = function () {
        return $http.get('scripts/Data/CaseClassifications.js').success(function (data) {
            caseClassifications = data;
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

        getCaseClassificationData: getCaseClassificationData,
        caseClassifications: function() {
            return caseClassifications
        },
        connectClassificationToMessage: function (data) {
            return $http.post('../datarequestapi/cm01/datacapture', data);
        },
        connectIdToMessage: function (data) {
            return $http.post('../datarequestapi/cm01/send', data);
        }

    }

});