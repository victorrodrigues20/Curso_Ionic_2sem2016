/**
 * Created by Victor on 08/09/2016.
 */

sControllers.controller('LoginController', function($scope, $ionicPopup, $state, $http) {
  $scope.usuario = {
    usuario: 'simao',
    senha: '123',
    logado: false
  };

  $scope.login = function(){

    console.log($scope.usuario);

    if ($scope.usuario.usuario == "simao" && $scope.usuario.senha == "1234") {
      //$location.path( '#/app/menu' );

      console.log("passei");
      console.log(sessaoApp.racas);

      $scope.usuario.logado = true;
      sessaoApp.usuario = $scope.usuario;

      $state.go('app.menu');
    }
    else {
        $ionicPopup.alert({
          title: 'Login inválido',
          template: 'Nome do usuário ou senha inválido'
        });
    };
  }
})
