'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}).filter('na', function() {
	return function(input) {
		return input ? input : 'N/A';
	};
});

// angular.module('phonecatFilters', []).filter('unknown', function() {
//   return function(input) {
//   	if (input == null || input == undefined) {
//   		return "N/A";
//   	}
//   };
// });