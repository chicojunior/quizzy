var app = angular.module('SistemaAcademico', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
    	when('/cadastro_questionario', {
        templateUrl: '/templates/questionario.html',
        controller: 'QuestionarioController'
      }).
      when('/cadastro_usuario', {
        templateUrl: 'usuario.html',
        controller: 'UsuarioController'
      });
}]);