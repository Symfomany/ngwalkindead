/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('userCtrl', userCtrl);

    userCtrl.$inject = ['user'];

    function userCtrl(user) {
        var vm = this;
        vm.user = user;
    }

}());