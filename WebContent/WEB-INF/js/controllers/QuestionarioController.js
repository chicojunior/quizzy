app.controller('QuestionarioController', function($scope) {

  $scope.questionario = {};
  $scope.listaQuestionarios = [];

  $scope.gravar = function() {
    $scope.listaQuestionarios.push($scope.questionario);
    $scope.questionario = {};
  }

  $scope.remover = function(questionario) {
    var indice = $scope.listaQuestionarios.indexOf(questionario);
    $scope.listaQuestionarios.splice(indice, 1);
  }
});