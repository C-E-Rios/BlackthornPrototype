'use strict';

app.directive('suspectListItem', function () {
    return {
        restrict: 'C',
        templateUrl: 'scripts/Directives/Templates/SuspectItem.html',
        link: function (scope, element, attrs) {

            function suspectClickEvent() {
                if (!$(element).hasClass('selected')) {
                    scope.addSuspectItem(scope.suspect);
                } else {
                    scope.removeSuspectItem(scope.suspect);
                }
            }

            $(element).on('click.suspectListItem', function (e) {
                scope.$apply(suspectClickEvent);
                // IE Fix. Button icon does not render correctly when enabled, until its parent has been focus'd.
                $(".page-top-tools").parent().trigger('focus');
            });
        }
    };
});