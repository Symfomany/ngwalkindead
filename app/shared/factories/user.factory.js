/**
 * Contact Controller
 */
(function () {

    "use strict";

    angular.module('app').factory('UserFcty', UserFcty);

    UserFcty.$inject = ['$log', '$q', '$http'];


    /**
     * Handler User
     */
    function UserFcty($log, $q, $http) {

        var obj = {
            all: getAll,
            one: getOne,
            add: addOne,
            remove: removeOne,
        };

        return obj;


        /**
         * get All User
         */
        function getAll() {
            var deferred = $q.defer();
            $http.get("http://localhost:3000/data")
                .success(function (data) {
                    deferred.resolve(data);
                    $log.info('API chargee :)');
                }).error(deferred.reject);
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }

        /**
         * get All User
         */
        function getOne(pseudo) {
            var deferred = $q.defer();
            $http.get("http://localhost:3000/data/" + pseudo)
                .success(function (data) {
                    deferred.resolve(data);
                }).error(deferred.reject);
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }


        /**
         * add one User
         */
        function addOne(obj) {
            var deferred = $q.defer();

            $http.post('http://localhost:3000/data/', obj)
                .success(function (data) {
                    deferred.resolve(data);
                }).error(deferred.reject);
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }


        /**
         * remove one User
         */
        function removeOne(id) {
            var deferred = $q.defer();
            console.log(id);
            $http.delete("http://localhost:3000/data/" + id)
                .success(function (data) {
                    deferred.resolve(data);
                }).error(deferred.reject);
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }


    }



} ());