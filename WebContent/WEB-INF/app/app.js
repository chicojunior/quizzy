var app = angular.module('quizzy', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  urlRouterProvider.otherwise('/')
	$stateProvider
  	.state('main', {
    	url: "/",
    	templateUrl: "app/views/main.html",
      controller: 'MainController'
    })
   	.state("/new", {
   		url: "new_quiz"
      templateUrl: 'app/views/new_quiz.html',
      controller: 'QuestionarioController'
    });
});