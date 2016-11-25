'use strict';

var url = window.location.origin + "/EmployeeManagement/employee/:id";
 
app.factory('EmployeeFactory', ['$resource', function ($resource) {
    
	return $resource(
			url, 
            {id: '@id'},
            {
              get: {method: 'GET'},
              update: {method: 'PUT'}
            });
}]);