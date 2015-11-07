//Directiva que representa cada fila en una coleccion de post
//Definimos sus propiedades
angular.module ("cutregram").directive ("elementoPost", function(backend){

    return {

        //Con restrict indicamos si usar la directiva como elemento (E) o
        //como atributo (A)
        restrict:"AE",

        //Con template / templateUrl establecemos la vista de la directiva
        templateUrl: "views/elementoPost.html",

        //Con scope establecemos la interfaz de comunicación
        scope:{
            post: "=", //Con "=" establecemos enlace bidireccional
            onPostClick: "&" //Con "&" establecemos notificacion desde la directiva al scope padre
        },
        //En link establemos la lógica de la directiva y manipulamos el DOM
        //en caso de necesitarlo

        link: function (scope){

            //Sumar un me gusta
            scope.MeGusta=function (){
                backend.sumarMeGusta(scope.post.id).then (
                    function () {
                        scope.post.likes++;
                    }
                );
            };

            //Sumar un No me gusta
            scope.NoMeGusta=function (){
                backend.sumarNoMeGusta(scope.post.id).then (
                    function (){
                        scope.post.dislikes ++;
                    }
                );
            };

            scope.notificarClick = function(){

                // Al definir una propiedad de la interfaz de comunicación con "&" asociamos un
                // manejador, que será siempre una función, y por tanto podemos ejecutarla como tal.
                scope.onPostClick({
                    //Valores que quiero pasar fuera
                    idPost: scope.post.id
                });

            };


        }

    };

});
