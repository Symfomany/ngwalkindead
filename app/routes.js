/**
 * All Routing
 */
(function() {

    'use strict';


    /**
     * All Routing here...
     * Each Route can resolve some datas before send in controller
     */
    angular.module('app', ['ngRoute', 'ngAnimate', 'ngMaterial']).config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main', // with alias in view for ANgular StyleGuide
                resolve: { // resolve Factory before display view and send by injection in controller
                    users: function(UserFcty) {
                        return UserFcty.all();
                    }
                }
            })
            .when('/user/:id', {
                templateUrl: 'app/user/user.html',
                controller: 'userCtrl',
                controllerAs: 'main', // with alias in view for ANgular StyleGuide
                resolve: { // resolve Factory before display view and send by injection in controller
                    user: function(UserFcty, $route) {
                        return UserFcty.one($route.current.params.id);
                    }
                }
            })
            .when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'contactCtrl',
                controllerAs: 'contact'
            });
    });


}());