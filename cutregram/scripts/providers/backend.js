angular.module("cutregram").provider ("backend", function ($httpProvider){

    var urlBackend="";

    //Retornamos un objeto
    return {
        establecerApiKey : function (valor){
            //Con esta funcion establecemos el API KEY del backend
            $httpProvider.defaults.headers.common = {
                "X-Cutregram-Api-Key": valor
            };
        },
        //Con esta funcion habilitamos el cruce de dominoio
        //en las peticiones
        habilitarPeticionesCORS : function (){

            $httpProvider.defaults.headers.post={};
            $httpProvider.defaults.headers.put={};
            $httpProvider.defaults.headers.patch={};
        },

        establecerUrlBackend: function (valor){
            urlBackend=valor;
        },

        //Definimos el factory que se inyectará en fase de run
        //Utilizamos la notacion en linea
        //Al ser un factory (ya que un provider en fase run es un factory)
        // puede hacer un return de cualquier tipo
        $get:["$http",function ($http){
            return {
                //Obtenemos todos los post
                obtenerTodosLosPost:function(){
                    return $http.get(urlBackend + "posts",{
                        cache:true //Cacheamos los datos
                    });
                },
                //Obtenemos los post del usuario en sesion
                obtenerMisPost:function(){
                    return $http.get(urlBackend + "posts/me",{
                        cache:true
                    });
                },

                //Obtener el post indicado (detalle Post)
                obtenerPost: function(idPost){
                    return $http.get (urlBackend + "posts/" + idPost);
                },

                //Sumamos un me gusta al post indicado
                sumarMeGusta: function (idPost){
                    return $http.post(urlBackend + "posts/" +idPost + "/like");
                },
                //Sumamos un no me gusta al post indicado
                sumarNoMeGusta: function (idPost){
                    return $http.post(urlBackend + "posts/" +idPost + "/dislike");
                }
            }
        }]
    }

});