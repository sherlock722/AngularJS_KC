//angular.module("cutregram").controller("ColeccionPostsCtrl", function ($scope, $http)
angular.module("cutregram").controller("ColeccionPostsCtrl", function ($scope, $http, Posts){

    $scope.posts=Posts.data;
    /*$scope.post=[{
        "id":1,
        "text":"Pedazo de viaje que me acabo de hacer"
    }, {
        "id":2,
        "text":"Me voy a comer toda esta ensalada"
    }];*/

    //API Key:91b6d0f49a864d02a169f3c4199e1c09

    //Es una promesa
    /*$http.get("http://cutregram-sp.appspot.com/api/1/posts").then(
        //La petición al servidor fue correcta
        function (respuesta){
            //
            //debugger;
            $scope.posts=respuesta.data;
        },
        //Ocurrio algo malo en el servidor
        function (error){
            //En caso de error
        }
    );*/

    /*$http.post("http://cutregram-sp.appspot.com/api/1/posts",{
        "text":"Segunda Prueba de subida"
    });*/

});
