app.controller("ClienteController",	["$scope",	function($scope)	{

    $scope.cliente = {
        nome: "",
        sexo: ""
    }

    $scope.opSexo = [
        { descricao: "Feminino", valor: "F" },
        { descricao: "Masculino", valor: "M" },
    ];

    $scope.listClientes = [];

    $scope.salvarCliente = function() {
        $scope.listClientes.push($scope.cliente);
    }

}]);
