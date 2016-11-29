/**
 * Filter
 */
(function() {

    "use strict";

    angular.module('app').directive("map", map);


    function map() {

        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: { coords: '=coords', users: '=users' },
            template: '<div id="map"></div>',
            link: function(scope, element, attrs) {
                scope.$watch("users", function(newValue, oldValue) {
                    //console.log(newValue, oldValue);

                    var map = new google.maps.Map(document.getElementById('map'), {
                        center: scope.coords, //init
                        zoom: 11
                    });

                    var lat = 45.708030;
                    var long = 4.995003;
                    newValue.forEach(function(element) {

                        var contentString = '<div id="content">' +
                            element.pseudo + "  <b>" + element.activite + "</b>" +
                            '</div>';

                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });


                        lat++; //exemple
                        long++;
                        var marker = new google.maps.Marker({
                            position: { lat: parseFloat(element.coord.lat), lng: parseFloat(element.coord.long) },
                            map: map,
                            title: element.pseudo
                        });
                        marker.addListener('click', function() {
                            infowindow.open(map, marker);
                        });
                        // To add the marker to the map, call setMap();
                        marker.setMap(map);


                    }); //end foreach

                }, true);



            }

        };
    }


}());