angular.module("cutregram").controller("detallePostCtrl", function ($scope, Post, backend){

    $scope.post=Post.data;

    //Volvemos atras en el historico del navegador
    $scope.volver = function (){

        //Va atras en el historico de navegacion
        history.back();

    };

    //No es necesario crear una variable para recoger los datos de la vista ya que se crea
    //automaticamente una variable que cuelga del $scope y que se va a llamar comentario
    //$scope.comentario="";

    //Enviamos al servidor un nuevo comentario
    $scope.enviarComentario = function(){

        //Enviamos el comentario al servidor
        var comentario={
            text:$scope.comentario
        };


        backend.enviarComentario($scope.post.id, comentario).then (
            //Si  ha ido bien añadimos el comentario creado en la coleccion
            //del post. Nos ahorramos ir de nuevo a por el post
            // Si ha ido bien.

            function(respuesta) {

                //El comentario aparece el último.
                //$scope.post.comments.unshift( respuesta.data );


                // Añadimos el comentario creado en la colección
                // del post. Nos ahorramos ir de nuevo a por el post.
                //Con unshift hacemos que el nuevo comentario aparezca el primero
                $scope.post.comments.unshift( respuesta.data );
                // Limpiamos la caja de texto.
                $scope.comentario = "";
            },
            //En caso de error
            function (error){

                //Mostrar el error
            }
        );


        /*var comentario={
            text:$scope.comentario,
            author:"javierc"
        }*/





    };
});
