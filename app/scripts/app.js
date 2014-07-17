'use strict';

var app = angular.module('twifUiApp', [

    'ui.router.state',
    'ui.bootstrap'

]);



app.run(["$rootScope", "$location", "$state", function ($rootScope, $location, $state) {

    //$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    //    event.preventDefault();
    //    $state.go('error');
    //});

    //$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    //    event.preventDefault();
    //    $state.go('error');
    //});

}]);

app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$provide", function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {

    $urlRouterProvider.otherwise('/create');

    $stateProvider
        // Create Home =========================================================
        .state('create', {
            url: '/create',
            templateUrl: 'views/Create/Home.html'
        })
        // Select Message ======================================================
        .state('create.start', {
            url: '/start',
            views: {
                "@": {
                    templateUrl: 'views/Create/Start.html',
                    controller: 'MessageTypeCtrl'
                }
            },
            resolve: {
                allMessageTypes: function (MessageTypeService) {
                    return MessageTypeService
                    .getMessageTypes()
                    .then(function (response) {
                        return response.data;
                    });
                }
            }
        })

        // CM01 ================================================================

        // Add Suspects ========================================================
        .state('create.start.cm01', {
            url: '/cm01',
            views: {
                "@": {
                    templateUrl: 'views/Create/AddSuspects.html',
                    controller: 'SuspectCtrl'
                }
            },
            resolve: {
                allSuspects: function (CM01Service) {
                    return CM01Service.getSuspects();
                }
            }
        })
        // Data Capture ========================================================
        .state('create.start.cm01.additional-information', {
            url: '/additional-information',
            views: {
                "@": {
                    templateUrl: 'views/Create/DataCapture.html',
                    controller: 'DataCaptureCtrl'
                }
            },
            resolve: {
                caseClassificationData: function (CM01Service) {
                    return CM01Service.getCaseClassificationData();
                }
            }
        })
        .state('create.start.cm01.send-message', {
            url: '/send-message',
            views: {
                "@": {
                    templateUrl: 'views/Create/SendMessage.html',
                    controller: 'SendMessageCtrl'
                }
            }
        })

        // Error ===============================================================
        .state('error', {
            url: '/error',
            templateUrl: 'views/Errors/RouteResolveError.html'
        })
    ;


}]);