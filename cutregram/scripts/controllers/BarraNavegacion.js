//Controlador de la barra de navegacion
//Se inyecta $route
angular.module ("cutregram").controller("BarraNavegacionCtrl", function ($scope,$route){

    //Comprobamos si la ruta navegada es /todos
    $scope.rutaEsTodos = function (){
        //debugger;
        return $route.current && $route.current.$$route.originalPath === "/todos";
    };
    //Comprobamos si la ruta navegada es /mios
    $scope.rutaEsMios = function (){

        return $route.current && $route.current.$$route.originalPath === "/mios";
    };
});
