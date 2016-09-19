(function () {
    'use strict';
    //Diretiva - Componente UX Button
    var directiveUxButton = function () {
        return {
            restrict: 'AECM',
            replace: false,
            scope: {
                uxLabel: '@',
                uxWidth: '@',
                uxHeight: '@'
            },
            template: '<button class="component-ux-button ng-style="{width:uxWidth, height:uxHeight}">{{uxLabel}}</button>'
        };
    };
    //Definição do <<Módulo>> e <<Componente>>
    angular.module('moduleUX',[]).directive('uxButton', directiveUxButton);
}());