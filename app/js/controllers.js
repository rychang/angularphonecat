'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query(function(phones){
         phones.forEach(function(phone){
            Phone.get({phoneId: phone.id}, function(phoneInfo) {
                phone.weight = parseFloat(phoneInfo.sizeAndWeight.weight);
                phone.storage = parseFloat(phoneInfo.storage.flash);
                phone.talktime = parseFloat(phoneInfo.battery.talkTime);
                phone.standbytime = parseFloat(phoneInfo.battery.standbyTime);
            });
        });
    });

  
    $scope.orderProp = 'age';
    $scope.phoneA;
    $scope.phoneB;
    $scope.favorites = [];


    $scope.addToCompare = function(phone, which) {
      if(which == 'A'){
         $scope.phoneA = phone;
      } else if (which == 'B'){
         $scope.phoneB = phone;
      }
    }

    $scope.addToFavorites = function(phone) {

      $scope.favorites.push(phone);
      console.log(phone.name + "pushed");
    }

    $scope.buy = function(phone) {
      var str = "http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Dmobile&field-keywords=";
      var url = str.concat(phone.name);
      window.open(url);
    }



  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

phonecatControllers.controller('PhoneComparisonCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phoneA = Phone.get({phoneId: $routeParams.phoneIdA});

    $scope.phoneB = Phone.get({phoneId: $routeParams.phoneIdB});

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
