// create the module and name it scotchApp
var app = angular.module('mainApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/project', {
      templateUrl : 'projects.html',
      controller  : 'projectController'
    });
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Hi everyone';
});

app.controller('aboutController', function($scope) {
  $scope.message = 'Coming soon in about page';
});

app.controller('projectController', function($scope) {
  $scope.message = 'Coming soon in project page';
});
