/**
 * Filter
 */
(function() {

    "use strict";

    /**
     * 1ere syntaxe
     * Just a filter to render HTML in view
     * @returns
     * */
    angular.module('app').filter("trust", ['$sce', function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    }]);


    /**
     * 2eme syntax
     * Filter Website to display link
     */

    angular.module('app').filter('website', website);

    function website() {

        return function(input) {
            var link = "<a href=" + input + ">" + input + "</a>";
            return link;
        }
    }



    /**
     * 3eme syntax
     * Filter Age calculate
     */

    angular.module('app').filter('age', age);

    function age() {

        return function(input) {
            return moment().diff(moment(input, 'DD/MM/YYYY'), 'years');
        }
    }


    /**
     * 3eme syntax
     * Filter Age Month
     */

    angular.module('app').filter('ageMonth', ageMonth);

    function ageMonth() {

        return function(input) {
            var now = moment().format("MM");
            var userMonth = moment(input, "DD/MM/YYYY").format("MM");

            if (now === userMonth) {
                return true;
            }
        }
    }


    /**
     * 3eme syntax
     * Filter Age Month
     */

    angular.module('app').filter('sexe', sexe);

    function sexe() {

        return function(sexe) {
            if (sexe === false) {
                return "Femme";
            }
            return "Homme";

        };
    }


    /**
     * 3eme syntax
     * Filter Age Month
     */

    angular.module('app').filter('sexeFil', sexeFil);

    function sexeFil() {

        return function(input, sexe) {
            if (!sexe) {
                return input;
            }

            return _.filter(input, function(user) {
                return user.sexe == sexe;
            });


        };
    }
    /**
     * 3eme syntax
     * Filter Age Month
     */

    angular.module('app').filter('supAge', supAge);

    function supAge() {

        return function(tableau, ageUser) {
            if (ageUser === undefined || ageUser === null) {
                return tableau;
            }
            return _.filter(tableau, function(use) {
                return moment().diff(moment(use.naissance, 'DD/MM/YYYY'), 'years') >= ageUser;
            });

        };
    }



}());