/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['users'];

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */
    function mainCtrl(users) {
        var vm = this;
        vm.title = "Hello Angular by StyleGuide";
        vm.users = users;
        vm.add = add;
        vm.displayAge = displayAge;
        vm.remove = remove;
        vm.age = 18;

        function add() {
            vm.userAdded = {
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

            // On reinitialise le formulaire
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
        }

        function displayAge(dateBirth) {
            return moment().diff(moment(dateBirth, 'DD/MM/YYYY'), 'years');
        };

        function remove(user) {
            Materialize.toast(user.pseudo + " est mort... ", 4000);

            var index = vm.users.indexOf(user);
            vm.users.splice(index, 1);
        }


    }

}());