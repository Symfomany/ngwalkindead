/**
 * Configure your app...
 */
(function() {

    "use strict";


    /**
     * All Module configured by Angular
     * Configure All Modules here...
     * Create constants for global variables in projects
     */
    angular.module('app', ['ngAnimate', 'angular-loading-bar'])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider, $compileProvider, $logProvider) {
            $compileProvider.debugInfoEnabled(true);
            $logProvider.debugEnabled(true);

            cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
            cfpLoadingBarProvider.parentSelector = '#loading-bar-container';

        }]);


}());