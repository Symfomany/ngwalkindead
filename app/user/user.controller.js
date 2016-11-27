/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('userCtrl', userCtrl);

    userCtrl.$inject = ['$routeParams', 'user'];

    function userCtrl(user, $routeParams) {
        var vm = this;
        vm.user = user;
    }

}());