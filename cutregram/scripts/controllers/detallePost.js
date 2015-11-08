angular.module("cutregram").controller("detallePostCtrl", function ($scope, Post){

    $scope.post=Post.data;

    //Volvemos atras en el historico del navegador
    $scope.volver = function (){

        //Va atras en el historico de navegacion
        history.back();

    };

});
