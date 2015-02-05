	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This is the Home Page';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'This is an about page!!!';
		$scope.states = [
            { name: 'Maharashtra', capital: 'Mumbai' },
            { name: 'Karnataka', capital: 'Bangalore' },
            { name: 'Punjab', capital: 'Chandigarh' },
            { name: 'Gujrat', capital: 'GandhiNagar' }
        ];

        $scope.addState = function () {
            $scope.states.push({ name: $scope.inputData.name, capital: $scope.inputData.capital });
        };
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us Page!!!!';
	});