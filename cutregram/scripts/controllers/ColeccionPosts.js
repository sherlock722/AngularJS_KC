//angular.module("cutregram").controller("ColeccionPostsCtrl", function ($scope, $http)
//Inyectamos el provider para usar la funcionalidad de los botones
angular.module("cutregram").controller("ColeccionPostsCtrl", function ($scope, $http, Posts, backend,$location){

    $scope.posts=Posts.data;


    //Quiero recibir la notificacion de para navegar
    //Redirigir el navegador al detalle del post indicado
    $scope.navegar = function(idPost){

        //alert ("Navegar al post " + idPost);
        //Cuando desde un controlador quiero navegar a otra ruta
        //necesito usar el servicio $location
        $location.path("/detalle/" + idPost);

    }


    //Usamos la funcionalidad de los botones (inyectamos el provider backend)

    /* Se ha llevado el código a la propiedad link de la directiva elementoPost.js
    //Sumar un me gusta
    $scope.MeGusta=function (post){
        backend.sumarMeGusta(post.id).then (
            function (respuesta) {
                post.likes++;
            }
        );
    };

    //Sumar un No me gusta
    $scope.NoMeGusta=function (post){
        backend.sumarNoMeGusta(post.id).then (
            function (respuesta){
                post.dislikes ++;
            }
        );
    };
    */


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
