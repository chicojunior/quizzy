app.controller('UsuarioController', function($scope) {

  $scope.usuario = {};
  $scope.listaUsuarios = [];

  $scope.gravar = function() {
    $scope.listaUsuarios.push($scope.usuario);
    $scope.usuario = {};
  }

  $scope.remover = function(usuario) {
    var indice = $scope.listaUsuarios.indexOf(usuario);
    $scope.listaUsuarios.splice(indice, 1);
  }
});