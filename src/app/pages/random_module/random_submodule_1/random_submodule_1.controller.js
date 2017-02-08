/**
 * @author NTG
 * created on 21.10.2016
 */

(function() {
    'use strict';

    angular.module('NTGIonicSeed.pages.randommodule.random_submodule_1')
        .controller('randomSubModule1Controller', randomSubModule1Controller);

    /** @ngInject */
    function randomSubModule1Controller($rootScope, $state, $window, httpService, showToast, TlinkConstants, pageLoading, $ionicPopover, $scope, $filter, ionicDatePicker, $ionicPopup, $ionicScrollDelegate, $ionicListDelegate, backButtonNavigation, $timeout, $ionicHistory) {

        var _self = this; //_self will the current object of this controller
        $rootScope.stateValue = $state.current.name; // custom header 
        

        backButtonNavigation.goBackToPage($scope, 'app.random_submodule_2', 'app.home');

        // initialize your page
        _self.initialize = function () {
            /*code for initalizing*/
        };


        _self.fabButtonClick = function() {
            alert("FAB clicked!! - Navigating to next page!");
            $state.go('app.random_submodule_2');
        }

    }


    randomSubModule1Controller.$inject = ['$rootScope', '$state', '$window', 'httpService', 'showToast', 'TlinkConstants', 'pageLoading', '$ionicPopover', '$scope', '$filter', 'ionicDatePicker', '$ionicPopup', '$ionicScrollDelegate', '$ionicListDelegate', 'backButtonNavigation', '$timeout', '$ionicHistory'];

})();