//Definicion de la aplicacion
//Inyectamos la librerúa ngRoute para configurar las rutas
angular.module ("cutregram", ["ngRoute"]);


//Atacamos la parte del config
//Configuramos el servicio http para que las cabeceras
//que tiene que mandar al servidor sea de una determinada forma
angular.module ("cutregram").config (function ($httpProvider, Properties){

    //Configuramos el servicio http para que envie la cabecera
    //necesaria
    $httpProvider.defaults.headers.common = {
        //"X-Cutregram-Api-Key": "91b6d0f49a864d02a169f3c4199e1c09"
        "X-Cutregram-Api-Key": Properties.apiKey
    };

    //Configuramos (resetear) las cabeceras por defecto para evitar
    //problema de CORS (cruce de dominios)
    $httpProvider.defaults.headers.post={};
    $httpProvider.defaults.headers.put={};
    $httpProvider.defaults.headers.patch={};

});

//En fase de config inyectamos $routeProvider para configurar las rutas
//de la aplicacion
angular.module ("cutregram").config(function ($routeProvider, Properties) {

//Definir la ruta de "Todos los post"
    $routeProvider.when("/todos", {
        controller: "ColeccionPostsCtrl",
        templateUrl: "views/ColeccionPost.html",
        resolve: { //Devuelve una promesa
            //Propiedades y dependencias (se ejecuta previa a la navegacion)
            Posts: ["$http", function ($http){
                //return $http.get("http://cutregram-sp.appspot.com/api/1/posts",{
                return $http.get(Properties.backendUrl + "posts",{

                    cache:true //Cacheamos los datos
                });

            }] //Notacion de array en linea
        }
    });
//Definir la ruta de "Mis posts"
    $routeProvider.when("/mios", {
        controller: "MisPostsCtrl",
        templateUrl: "views/MisPosts.html",
        //Se resuelven dependencias del controlador.
        resolve: { //Devuelve una promesa
            //Propiedades y dependencias (se ejecuta previa a la navegacion)
            Posts: ["$http", function ($http){
                //return $http.get("http://cutregram-sp.appspot.com/api/1/posts/me",{
                return $http.get(Properties.backendUrl + "posts/me",{
                cache:true
                });

            }] //Notacion de array en linea
        }
    });

//Configuramos una ruta por defecto
    $routeProvider.otherwise({
        redirectTo: "/todos"
    });

});
