var app = angular.module('quizzy', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
    	when('cadastro_questionario', {
        templateUrl: 'app/views/questionario.html',
        controller: 'QuestionarioController'
      });
}]);