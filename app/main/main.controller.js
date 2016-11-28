/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['users', 'UserFcty'];

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */
    function mainCtrl(users, UserFcty) {
        var vm = this;

        vm.myDate = new Date();

        vm.minDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() - 2,
            vm.myDate.getDate());

        vm.maxDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() + 2,
            vm.myDate.getDate());

        vm.onlyWeekendsPredicate = function(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        };
        vm.title = "Hello Angular by StyleGuide";
        vm.users = users;
        vm.add = add;
        vm.displayAge = displayAge;
        vm.remove = remove;
        vm.age = 18;
        vm.sexe = true;
        vm.saisons = {
            's1': false,
            's2': false,
            's3': false,
            's4': false,
            's5': false,
            's6': false,
            's7': false
        };

        function add() {

            vm.saisonsArr = [];

            if (vm.saisons.s1 === true) { vm.saisonsArr.push(1); }
            if (vm.saisons.s2 === true) { vm.saisonsArr.push(2); }
            if (vm.saisons.s3 === true) { vm.saisonsArr.push(3); }
            if (vm.saisons.s4 === true) { vm.saisonsArr.push(4); }
            if (vm.saisons.s5 === true) { vm.saisonsArr.push(5); }
            if (vm.saisons.s6 === true) { vm.saisonsArr.push(6); }
            if (vm.saisons.s7 === true) { vm.saisonsArr.push(7); }


            var userAdded = {
                "id": 8,
                "pseudo": vm.pseudo,
                "sexe": vm.sexe,
                "photo": vm.photo,
                "activite": vm.activite,
                "naissance": vm.naissance,
                "coord": {
                    "lat": vm.lat,
                    "long": vm.long
                },
                "pays": vm.pays,
                "resume": vm.bio,
                "saison": vm.saisonsArr
            };


            UserFcty.add(vm.userAdded).then(function() {
                vm.users.push(vm.userAdded);
                // On reinitialise le formulaire
                // TODO: in objet because for..of and null
                vm.pseudo = "";
                vm.sexe = true;
                vm.activite = "";
                vm.photo = "";
                vm.naissance = "";
                vm.pays = "";
                vm.lat = "";
                vm.long = "";
                vm.bio = "";
                vm.saisons = {
                    's1': false,
                    's2': false,
                    's3': false,
                    's4': false,
                    's5': false,
                    's6': false,
                    's7': false
                };
            });

        }

        function displayAge(dateBirth) { };

        function remove(user) {
            Materialize.toast(user.pseudo + " est mort... ", 4000);

            var index = vm.users.indexOf(user);
            UserFcty.remove(user.id).then(function() {
                vm.users.splice(index, 1);
            });


        }


    }

} ());