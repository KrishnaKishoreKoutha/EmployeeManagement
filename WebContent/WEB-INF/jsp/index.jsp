<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Employee Management">
    <meta name="author" content="Krishna Kishore Koutha">
    <link rel="icon" href="../../favicon.ico">

    <title>Employee Management</title>

    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href=<c:url value='/static/css/bootstrap.min.css' />>
	
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!-- <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet"> -->

    <!-- Custom styles for this template -->
    <link href="<c:url value='/static/css/jumbotron-narrow.css' />" rel="stylesheet"></link>
    <link href="<c:url value='/static/css/app-styles.css' />" rel="stylesheet"></link>
	
  </head>

  <body class="ng-cloak">

    <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li role="presentation" class="active"><a href="#">Home</a></li>
          </ul>
        </nav>
        <h3 class="text-muted">Employee Management</h3>
      </div>

      <div class="jumbotron" ng-controller="EmployeeController as ctrl">
        <div>
        	<div class="alert alert-dismissible" ng-class="alertType" role="alert" ng-show="showAlert">
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			  <strong>{{statusText}}</strong> 
			</div>
        	<div class="well well-lg">
	        	<form class="form-inline" name="empSearchForm" ng-submit="ctrl.searchEmp(ctrl.employee.searchId)"> 
	        		<div class=form-group> 
	        			<label for="searchId">Emp ID</label> <span class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title="Try 1 to 10 for Emp ID"></span>
	        			<input type="number" class="form-control searchId" ng-model="ctrl.employee.searchId" id="searchId" placeholder="Emp ID" required> 
	       			</div> 
	   				<button type="submit" class="btn btn-warning btn-xs" value="Search"><span class="glyphicon glyphicon-search"></span></button> 
				</form> 
			</div>
			<div class="">
	        	<form class="form-horizontal" name="empForm" ng-submit="ctrl.submit()"> 
	        		<div class="form-group"> 
	        			<label for="inputTitle" class="pull-left">Title</label> 
	        			<input type="text" class="form-control title" ng-model="ctrl.employee.title" id="inputTitle" placeholder="Title" required ng-disabled="disableUpdateForm"> 
	        			<div class="has-error" ng-show="empForm.$dirty">
	                        <span ng-show="empForm.title.$error.required">This is a required field</span>
	                        <span ng-show="empForm.title.$invalid">This field is invalid </span>
	                    </div>
	       			</div> 
	       			<div class="form-group"> 
	        			<label for="inputName" class="pull-left">Name</label> 
	        			<input type="text" class="form-control name" ng-model="ctrl.employee.name" id="inputName" placeholder="Name" required ng-disabled="disableUpdateForm"> 
	        			<div class="has-error" ng-show="empForm.$dirty">
	                        <span ng-show="empForm.name.$error.required">This is a required field</span>
	                        <span ng-show="empForm.name.$invalid">This field is invalid </span>
	                    </div>
	       			</div> 
	       			<div class="form-group"> 
	       				<label for="inputDepartment" class="pull-left">Department</label> 
	       				<input type="text" class="form-control department" ng-model="ctrl.employee.department" id="inputDepartment" placeholder="Department" required ng-disabled="disableUpdateForm">
	       				<div class="has-error" ng-show="empForm.$dirty">
	                        <span ng-show="empForm.department.$error.required">This is a required field</span>
	                        <span ng-show="empForm.department.$invalid">This field is invalid </span>
	                    </div> 
	   				</div> 
	   				<button type="submit" class="btn btn-primary" value="Update" ng-disabled="disableUpdateForm">Update</button> 
	   				<input type="hidden" ng-model="ctrl.employee.id" />
				</form> 
			</div>
		</div>
      </div>

      <footer class="footer">
        <p>&copy; 2016 KrishnaKishoreKoutha, Inc.</p>
      </footer>

    </div> <!-- /container -->

    <script src="<c:url value='/static/js/jquery-1.11.3.js'/>" ></script>
    <script src="<c:url value='/static/js/angular.min.js'/>" ></script>
    <script src="<c:url value='/static/js/angular-resource.js'/>" ></script>
    
    <script src="<c:url value='/static/js/app.js' />"></script>
    <script src="<c:url value='/static/js/service/employee_service.js' />"></script>
    <script src="<c:url value='/static/js/controller/employee_controller.js' />"></script>
    
    <script src="<c:url value='/static/js/bootstrap.min.js' />"></script>
    
  </body>
</html>
