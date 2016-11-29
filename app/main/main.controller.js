/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['users', 'UserFcty', '$mdDialog'];

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */
    function mainCtrl(users, UserFcty, $mdDialog, $scope) {
        var vm = this;

        vm.showPrerenderedDialog = function(ev) {
            $mdDialog.show({
                controller: mainCtrl,
                contentElement: '#myDialog',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
        vm.cancel = function() {
            $mdDialog.cancel();
        };
        vm.hide = function() {
            $mdDialog.hide();
        };
        vm.cancel = function() {
            $mdDialog.cancel();
        };
        vm.answer = function(answer) {
            $mdDialog.hide(answer);
        };


        vm.users = users;
        vm.add = add;
        vm.displayAge = displayAge;
        vm.remove = remove;
        vm.age = 10;
        vm.naissance = new Date();
        vm.sexe = true;
        vm.saisons = [
            's1',
            's2',
            's3',
            's4',
            's5',
            's6',
            's7',
            's8',
            's9',
            's10'
        ];

        function add() {

            var userAdded = {
                "id": vm.users.length + 1,
                "pseudo": vm.pseudo,
                "sexe": vm.sexe,
                "photo": vm.photo,
                "activite": vm.activite,
                "naissance": moment(vm.naissance).format('DD/MM/YYYY'),
                "coord": {
                    "lat": vm.lat,
                    "long": vm.long
                },
                "pays": vm.pays,
                "resume": vm.bio,
                "saison": vm.saisonsSelect
            };

            UserFcty.add(userAdded).then(function() {
                vm.users.push(userAdded);
                vm.pseudo = "";
                vm.sexe = true;
                vm.activite = "";
                vm.photo = "";
                vm.naissance = "";
                vm.pays = "";
                vm.lat = "";
                vm.long = "";
                vm.bio = "";
                vm.saisonsSelect = [];


            });

        }

        function displayAge(dateBirth) {};

        function remove(user) {
            Materialize.toast(user.pseudo + " est mort... ", 4000);

            var index = vm.users.indexOf(user);
            UserFcty.remove(user.id).then(function() {
                vm.users.splice(index, 1);
            });


        }


    }

}());