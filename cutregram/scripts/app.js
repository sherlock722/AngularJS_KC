//Definicion de la aplicacion
angular.module ("cutregram", []);


//Atacamos la parte del config
//Configuramos el servicio http para que las cabeceras
//que tiene que mandar al servidor sea de una determinada forma
angular.module ("cutregram").config (function ($httpProvider){

    //Configuramos el servicio http para que envie la cabecera
    //necesaria
    $httpProvider.defaults.headers.common = {
        "X-Cutregram-Api-Key": "91b6d0f49a864d02a169f3c4199e1c09"
    };

    //Configuramos (resetear) las cabeceras por defecto para evitar
    //problema de CORS (cruce de dominios)
    $httpProvider.defaults.headers.post={};
    $httpProvider.defaults.headers.put={};
    $httpProvider.defaults.headers.patch={};

});
