'use strict';
 
app.controller('EmployeeController', ['$scope', 'EmployeeFactory', function($scope, EmployeeFactory) {
          var self = this;
          self.employee= {};
          
          $scope.disableUpdateForm = true;
          
          self.fetchEmployeeByID = function(id){
        	  EmployeeFactory.get({id: id}).$promise.then(function(employee) {
        		  $scope.disableUpdateForm = false;
            	  self.employee = employee;
            	  self.employee.searchId = id;
            	}, function(errResponse) {
            	   $scope.showAlert = true;
            	   $scope.alertType = "alert-danger";
            	   $scope.statusText = "Employee with ID-"+id+" doesn't exist!";
            	   self.employee={};
            	});
          };
           
          self.updateEmployee = function(){
        	  EmployeeFactory.update({id: self.employee.id}, self.employee).$promise.then(function(employee){
	    		   $scope.showAlert = true;
	           	   $scope.alertType = "alert-success";
	           	   $scope.statusText = "Employee with ID-"+employee.id+" updated successfully!";
	           	   $scope.disableUpdateForm = true;
	           	   self.employee={};
        	  }, function(errResponse) {
	           	   $scope.showAlert = true;
	        	   $scope.alertType = "alert-danger";
	        	   $scope.statusText = "Something went wrong!";
	        	   $scope.disableUpdateForm = false;
        	  });
        	  $scope.empForm.$setPristine();
          };
 
          self.submit = function() {
        	  EmployeeFactory.get({id: self.employee.id}, function(emp){
        		  if(emp.title==self.employee.title && emp.name==self.employee.name && emp.department==self.employee.department){
        			   $scope.showAlert = true;
	               	   $scope.alertType = "alert-warning";
	               	   $scope.statusText = "No changes to update!";
	               	   return;
        		  } else
            		  self.updateEmployee();
        	  })
        	  
          };
          
          self.searchEmp = function(id) {
        	  $scope.showAlert = false;
        	  $scope.disableUpdateForm = true;
        	  self.employee.id=id;
        	  self.fetchEmployeeByID(id);
          };
          
          $(function () {
        	  $('[data-toggle="tooltip"]').tooltip()
        	})
               
      }]);