function paginator(actual) {
    
    let position = 0;
    if (position != 0) {
        position = localStorage.getItem("total");
    }
    var count = localStorage.getItem("count");
    
    if (actual == 'ant') {
        count--;
        localStorage.setItem("count", count);
        imprimir(count);
    }
    if (actual == 'sig') {
        count++;
        localStorage.setItem("count", count);
        imprimir(count);
    }

}

function imprimir(count) {
    localStorage.setItem("count", count);
    if (localStorage.getItem("gestion") == 0 && localStorage.getItem("ciudad")  == 0 && localStorage.getItem("tipo") == 0 && localStorage.getItem("zona") == 0) {
    $.ajax({
        url: 'http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/' + count + '/total/12/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691'));
        },
        'dataType': "json",
        success: function (data) {
            
            console.log(data)

            localStorage.setItem("total", data.datosGrales.fin-1);

            var res = " ";
             for (var pos = 0; pos < data.Inmuebles.length ; pos++){
            res += '<div class="col-md-4 col-sm-6" style="padding-top: 25px;">' +
                    '<div class="single-property mb-40 fadeInUp wow" data-wow-delay="0.2s">'+
                    '<span>'+data.Inmuebles[pos].Gestion+'</span>'+    
                    '<span style="float: right;left: 130px;">'+data.Inmuebles[pos].Tipo_Inmueble+'</span>'+
                        '<div class="single-property">' +
                        '<div class="property-img">' +
                        '<a href="detalle-inmuebles.php?dt='+data.Inmuebles[pos].Codigo_Inmueble+'">';
                    if (data.Inmuebles[pos].foto1 != "") {
                        res += '<img src="' + data.Inmuebles[pos].foto1 + '"  alt="" >';
                    } else {
                        res += '<img src="img/no_image.png" alt="">';
                    }
                    res += '</a>' +
                        '</div>' +
                        '<div class="property-desc">' +
                        '<div class="property-desc-top">' +
                        '<h6><a href="detalle-inmuebles.php?dt='+data.Inmuebles[pos].Codigo_Inmueble+'">Codigo: '+ data.Inmuebles[pos].Codigo_Inmueble + '</a></h6>' ;
                        if (data.Inmuebles[pos].Gestion == "Arriendo") {

                            res += '<h4 class="price">' + data.Inmuebles[pos].Canon + '</h4>';
                        } else if (data.Inmuebles[pos].Gestion == "Arriendo/Venta") {

                            res += '<h4 class="price">' + data.Inmuebles[pos].Venta + '"<br>"' + data[i].Canon + '</h4>';
                        } else {
                            res += '<h4 class="price">' + data.Inmuebles[pos].Venta + '</h4>';
                        }
                        res+='<div class="property-location">' +
                        '<p><img src="img/property/icon-5.png" alt="">' + data.Inmuebles[pos].Ciudad +", "+data.Inmuebles[pos].Departamento + '</p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="property-desc-bottom">' +
                        '<div class="property-bottom-list">' +
                        '<ul>' +
                        '<li>' +
                        '<img src="img/property/icon-1.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].AreaConstruida + 'm<sup>2</sup>' + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-2.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].Alcobas + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-3.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].banios + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-4.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].garaje + '</span>' +
                        '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'+
                        '</div>'+
                        '</div>';
            }

            if(localStorage.getItem("total")==0){
            $(".pagina").html("pagina "+data.datosGrales.pagina_actual+ " de 1")
            }else{
            $(".pagina").html("pagina "+data.datosGrales.pagina_actual+ " de "+localStorage.getItem("total"))
            }
            $("#inmb").html(res)
        }

    });
    validar()
    }else{
        $.ajax({
                url: 'http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/' + count + '/total/12/departamento/0/ciudad/' + localStorage.getItem("ciudad") + '/zona/' + localStorage.getItem("zona") + '/barrio/0/tipoInm/' + localStorage.getItem("tipo")+ '/tipOper/' + localStorage.getItem("gestion") + '/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691'));
        },
        'dataType': "json",
        success: function (data) {
            
            console.log(data)

            localStorage.setItem("total", data.datosGrales.fin-1);

            var res = " ";
            for (var pos =0; pos < (data.Inmuebles.length); pos++){
            res += '<div class="col-md-4 col-sm-6" style="padding-top: 25px;">' +
                    '<div class="single-property mb-40 fadeInUp wow" data-wow-delay="0.2s">'+
                    '<span>'+data.Inmuebles[pos].Gestion+'</span>'+    
                    '<span style="float: right;left: 130px;">'+data.Inmuebles[pos].Tipo_Inmueble+'</span>'+
                        '<div class="single-property">' +
                        '<div class="property-img">' +
                        '<a href="detalle-inmuebles.php?dt='+data.Inmuebles[pos].Codigo_Inmueble+'">';
                    if (data.Inmuebles[pos].foto1 != "") {
                        res += '<img src="' + data.Inmuebles[pos].foto1 + '"  alt="" >';
                    } else {
                        res += '<img src="img/no_image.png" alt="">';
                    }
                    res += '</a>' +
                        '</div>' +
                        '<div class="property-desc">' +
                        '<div class="property-desc-top">' +
                        '<h6><a href="detalle-inmuebles.php?dt='+data.Inmuebles[pos].Codigo_Inmueble+'">Codigo: '+ data.Inmuebles[pos].Codigo_Inmueble + '</a></h6>' ;
                        if (data.Inmuebles[pos].Gestion == "Arriendo") {

                            res += '<h4 class="price">' + data.Inmuebles[pos].Canon + '</h4>';
                        } else if (data.Inmuebles[pos].Gestion == "Arriendo/Venta") {

                            res += '<h4 class="price">' + data.Inmuebles[pos].Venta + '"<br>"' + data[i].Canon + '</h4>';
                        } else {
                            res += '<h4 class="price">' + data.Inmuebles[pos].Venta + '</h4>';
                        }
                        res+='<div class="property-location">' +
                        '<p><img src="img/property/icon-5.png" alt="">' + data.Inmuebles[pos].Ciudad +", "+data.Inmuebles[pos].Departamento + '</p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="property-desc-bottom">' +
                        '<div class="property-bottom-list">' +
                        '<ul>' +
                        '<li>' +
                        '<img src="img/property/icon-1.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].AreaConstruida + 'm<sup>2</sup>' + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-2.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].Alcobas + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-3.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].banios + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-4.png" alt="">' +
                        '<span>' + data.Inmuebles[pos].garaje + '</span>' +
                        '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'+
                        '</div>'+
                        '</div>';
            }

            if(localStorage.getItem("total")==0){
            $(".pagina").html("pagina "+data.datosGrales.pagina_actual+ " de 1")
            }else{
            $(".pagina").html("pagina "+data.datosGrales.pagina_actual+ " de "+localStorage.getItem("total"))
            }
            $("#inmb").html(res)
        }

    });
    validar()
    }
}

function validar(){
    if(localStorage.getItem("total") == localStorage.getItem("count")){
        $("#siguiente").css("display","none");
    }else{
        $("#siguiente").css("display","inline-flex");
    }
    
     if(localStorage.getItem("count") == 1){
        $("#anterior").css("display","none");
    }else{
        $("#anterior").css("display","inline-flex");
    }
}