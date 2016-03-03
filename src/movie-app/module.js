angular.module('app.movie',['ngRoute']).config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'movie-app/home.html',
		controller: 'homeController',
		controllerAs: 'home'
	});
});;