sControllers.controller('RacaController', function($scope, $stateParams, $ionicHistory, $http) {

  $scope.racas = sessaoApp.racas;

  $scope.raca = null;

  $scope.salvar = function () {
    var i = $scope.procurarRaca($scope.racas);
    $scope.racas[i] = angular.copy($scope.raca);
  }

  $scope.excluir = function () {
    var i = $scope.procurarRaca($scope.racas);
    sessaoApp.racas.splice(i, 1);
    $ionicHistory.backView();
  }

  $scope.init = function(){

    if ($scope.racas == null)
    {

      $scope.testeService();
    }

    if ($stateParams.id != null &&
        $stateParams.id > 0)
    {
      var i = $scope.procurarRaca($scope.racas);
      $scope.raca = angular.copy($scope.racas[i]);

      console.log($scope.raca);
    }
  }

  $scope.procurarRaca = function(r){

    for (var i = 0; i < r.length; i++)
      if (r[i].id == $stateParams.id)
        return i;

    return null;
  }

  $scope.testeService = function(){

    var requisicao = {
      method: 'GET',
      url: 'http://localhost:3000/api/v1/raca',
      headers: {"Content-Type": "application/json"}//,
      //params: $parameterFactory.getAll()
    }

    $http(requisicao).success(function (data, status, headers, config) {
      /*var valores = data.resultado.calculoMediaTipoLoja
       callBack(valores)*/
      $scope.racas = data;
      console.log(data);
    }).error(function (data, status, headers, config) {
      console.log(status);
    });

  }

});
