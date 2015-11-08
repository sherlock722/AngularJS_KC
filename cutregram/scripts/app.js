//Definicion de la aplicacion
//Inyectamos la librerúa ngRoute para configurar las rutas
angular.module ("cutregram", ["ngRoute","angular-loading-bar"]);


//Atacamos la parte del config
//Configuramos el servicio http para que las cabeceras
//que tiene que mandar al servidor sea de una determinada forma

//Como se lleva a un provider el codigo el config cambia
//angular.module ("cutregram").config (function ($httpProvider, Properties){
angular.module ("cutregram").config (function (backendProvider, Properties){
    //Configuramos el servicio http para que envie la cabecera
    //necesaria
    //Se lleva a un provider (script/providers/backend.js)
    /*$httpProvider.defaults.headers.common = {
        //"X-Cutregram-Api-Key": "91b6d0f49a864d02a169f3c4199e1c09"
        "X-Cutregram-Api-Key": Properties.apiKey
    };

    //Configuramos (resetear) las cabeceras por defecto para evitar
    //problema de CORS (cruce de dominios)
    $httpProvider.defaults.headers.post={};
    $httpProvider.defaults.headers.put={};
    $httpProvider.defaults.headers.patch={};*/
    backendProvider.establecerApiKey(Properties.apiKey);
    backendProvider.habilitarPeticionesCORS();
    backendProvider.establecerUrlBackend(Properties.backendUrl);

});

//En fase de config inyectamos $routeProvider para configurar las rutas
//de la aplicacion

//Como he utilizado un provider (/script/providers/backebd.js) el config se sustituye:
//angular.module ("cutregram").config(function ($routeProvider, Properties) {
angular.module ("cutregram").config(function ($routeProvider) {

//Definir la ruta de "Todos los post"
    $routeProvider.when("/todos", {
        controller: "ColeccionPostsCtrl",
        templateUrl: "views/ColeccionPost.html",
        resolve: { //Devuelve una promesa
            //Propiedades y dependencias (se ejecuta previa a la navegacion)

            //Cambia al usar un provider (ahora se inyecta el provider backend)
            //Posts: ["$http", function ($http){
            Posts: ["backend", function (backend){ //Notacion de array en linea

                //Cambia al usar un provider
                //return $http.get("http://cutregram-sp.appspot.com/api/1/posts",{
                /*return $http.get(Properties.backendUrl + "posts",{

                    cache:true //Cacheamos los datos


                });*/

                return backend.obtenerTodosLosPost();

            }]
        }
    });
//Definir la ruta de "Mis posts"
    $routeProvider.when("/mios", {
        controller: "MisPostsCtrl",
        templateUrl: "views/MisPosts.html",
        //Se resuelven dependencias del controlador.
        resolve: { //Devuelve una promesa
            //Propiedades y dependencias (se ejecuta previa a la navegacion)

            //Cambia al usar un provider (ahora se inyecta el provider backend)
            //Posts: ["$http", function ($http){
            Posts: ["backend", function (backend){ //Notacion de array en linea

                //Cambia al usar un provider
                //return $http.get("http://cutregram-sp.appspot.com/api/1/posts/me",{
                /*return $http.get(Properties.backendUrl + "posts/me",{
                cache:true
                });*/
                return backend.obtenerMisPost();

            }]
        }
    });
    //Definir la ruta de detalle de post
    //Se pasa el parametro idPost (se hace con :)
    $routeProvider.when ("/detalle/:idPost",{

        controller:"detallePostCtrl",
        templateUrl: "views/detallePost.html",
        resolve: {
            //Propiedades y dependencias (se ejecuta previa a la navegacion)
            Post: ["backend","$route", function (backend,$route){ //Notacion de array en linea
                return backend.obtenerPost($route.current.params.idPost);
            }]
        }

    });


//Configuramos una ruta por defecto
    $routeProvider.otherwise({
        redirectTo: "/todos"
    });

});
