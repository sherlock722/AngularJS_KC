//Filtro que escribe una firma dados unn usuario y una fecha
angular.module("cutregram").filter ("firma", function ($filter){

    //Los filtros siempre retornan una funcion
    //Ademas siempre tienen un parametro
    return function (autor, fecha) {
        return "Publicado por " + autor + " en " + $filter("date")(fecha, 'medium');
    }
});
