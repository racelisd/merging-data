
angular.module('AddressBook', [])
	.controller('AddressController', ['$scope', function($scope) {
		$scope.employees = pawneeEmployees;
		$scope.sortorder = 'lastName';
	}]);