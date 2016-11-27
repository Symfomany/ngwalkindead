/**
 * Contact Controller
 */
(function() {

    "use strict";

    angular.module('app').factory('UserFcty', UserFcty);

    UserFcty.$inject = ['$log', '$q', '$http'];


    /**
     * Handler User
     */
    function UserFcty($log, $q, $http) {

        var obj = {
            all: getAll
        };

        return obj;


        /**
         * get All User
         */
        function getAll() {
            var deferred = $q.defer();
            $http.get("http://localhost:3000/db")
                .success(function(data) {
                    deferred.resolve(data);
                    $log.info('API chargee :)');
                }).error(deferred.reject);
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }


    }



}());