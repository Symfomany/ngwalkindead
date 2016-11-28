/**
 * Configure your app...
 */
(function () {

    "use strict";


    /**
     * All Module configured by Angular
     * Configure All Modules here...
     * Create constants for global variables in projects
     */
    angular.module('app', ['ngAnimate', 'ngMaterial', 'ngMessages', 'masonry'])
        .config(function ($compileProvider, $logProvider) {
            $compileProvider.debugInfoEnabled(true);
            $logProvider.debugEnabled(true);

        });


} ());