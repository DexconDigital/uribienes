setTimeout(function () {
    $.ajax({
        url: 'http://www.simi-api.com/ApiSimiweb/response/v21/inmueblesDestacados/total/10/limit/10',
        type: 'GET',
        cache: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691'));
        },
        'dataType': "json",
        success: function (data) {
            console.log(data)
            var res = "";
            if (data == "Sin resultados") {
                res += '<br><br><h3 style="margin-left: 15px;"> No hay Inmuebles destacados </h3>';
                $("#property").append(res);
                return;

            } else {
                var j = 0;
                for (var i = 0; i < data.totalInmuebles; i++) {
                    res +='<div class="col-md-4 col-sm-6" style="padding-top: 25px;">' +
                    '<div class="single-property mb-40 fadeInUp wow" data-wow-delay="0.2s">'+
                    '<span>'+data[i].Gestion+'</span>'+    
                    '<span style="float: right;left: 130px;">'+data[i].Tipo_Inmueble+'</span>'+
                        '<div class="single-property">' +
                        '<div class="property-img">' +
                        '<a href="detalle-inmuebles.php?dt='+data[i].Codigo_Inmueble+'">';
                    if (data[i].foto1 != "") {
                        res += '<img src="' + data[i].foto1 + '"  alt="" >';
                    } else {
                        res += '<img src="img/no_image.png" alt="">';
                    }
                    res += '</a>' +
                        '</div>' +
                        '<div class="property-desc">' +
                        '<div class="property-desc-top">' +
                        '<h6><a href="detalle-inmuebles.php?dt='+data[i].Codigo_Inmueble+'">Codigo: '+ data[i].Codigo_Inmueble + '</a></h6>' +
                        '<h4 class="price">' + data[i].Canon + '</h4>' +
                        '<div class="property-location">' +
                        '<p><img src="img/property/icon-5.png" alt="">' + data[i].Ciudad +", "+data[i].Departamento + '</p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="property-desc-bottom">' +
                        '<div class="property-bottom-list">' +
                        '<ul>' +
                        '<li>' +
                        '<img src="img/property/icon-1.png" alt="">' +
                        '<span>' + data[i].AreaConstruida + 'm<sup>2</sup>' + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-2.png" alt="">' +
                        '<span>' + data[i].Alcobas + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-3.png" alt="">' +
                        '<span>' + data[i].banios + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-4.png" alt="">' +
                        '<span>' + data[i].garaje + '</span>' +
                        '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'+
                        '</div>'+
                        '</div>';
                    j++;
                    if (j > 5) {
                        break;
                    }
                }
            }
            $("#property").append(res);

        }

    }
    );

    $.ajax({
        url: 'http://www.simi-api.com/ApiSimiweb/response/v21/filtroInmueble/limite/0/total/100/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0',
        type: 'GET',
        cache: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691'));
        },
        'dataType': "json",
        success: function (data) {
            var res = "";
            if (data == "Sin resultados") {
                res += '<h1 style="color:white"> No hay Inmuebles destacados </h1>';
                $("#propied").append(res);
                return;

            } else {
                var j = 0;
                for (var i in data) {
                    res +='<div class="col-md-4" style="padding-top: 25px;">' +
                    '<div class="single-property mb-40 fadeInUp wow" data-wow-delay="0.2s">'+
                    '<span>'+data[i].Gestion+'</span>'+    

                        '<div class="single-property">' +
                        '<div class="property-img">' +
                        '<a href="detalle-inmuebles.php?dt='+data[i].Codigo_Inmueble+'">';
                    if (data[i].foto1!="") {
                        res += '<img src="' + data[i].foto1 + '"  alt="" >';
                    } else {
                        res += '<img src="img/no_image.png" alt="" style="width: 100%;">';
                    }
                    res += '</a>' +
                        '</div>' +
                        '<div class="property-desc">' +
                        '<div class="property-desc-top">' +
                        '<h6><a href="detalle-inmuebles.php?dt='+data[i].Codigo_Inmueble+'">' + data[i].Barrio + '</a></h6>' +
                        '<h4 class="price">' + data[i].Canon + '</h4>' +
                        '<div class="property-location">' +
                        '<p><img src="img/property/icon-5.png" alt="">' + data[i].Ciudad +", "+data[i].Departamento + '</p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="property-desc-bottom">' +
                        '<div class="property-bottom-list">' +
                        '<ul>' +
                        '<li>' +
                        '<img src="img/property/icon-1.png" alt="">' +
                        '<span>' + data[i].AreaConstruida + 'm<sup>2</sup>' + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-2.png" alt="">' +
                        '<span>' + data[i].Alcobas + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-3.png" alt="">' +
                        '<span>' + data[i].banios + '</span>' +
                        '</li>' +
                        '<li>' +
                        '<img src="img/property/icon-4.png" alt="">' +
                        '<span>' + data[i].garaje + '</span>' +
                        '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'+
                        '</div>'+
                        '</div>';
                   
                        
                }
            }
            $("#propied").append(res);

        }

    }
);



$.ajax({
            url: 'http://www.simi-api.com/ApiSimiweb/response/v21/filtroInmueble/limite/0/total/100/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0',
            type: 'GET',
            cache: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    'Authorization',
                    'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691'));
            },
            'dataType': "json",
            success: function (data) {
                var res = "";
                if (data == "Sin resultados") {
                    res += '<h1 style="color:white"> No hay Inmuebles destacados </h1>';
                    $("#propiedades").append(res);
                    return;
    
                } else {
                    var j = 0;
                    for (var i in data) {
                        res +='<div class="col-md-6 col-sm-6 col-xs-12">' +
                            '<div class="single-property">' +
                            '<div class="property-img">' +
                            '<a href="detalle-inmuebles.php?dt='+data[i].Codigo_Inmueble+'">';
                            if (data[i].foto1 != "") {
                            res += '<img src="' + data[i].foto1 + '"  alt="" >';
                        } else {
                            res += '<img src="img/no_image.png" alt="">';
                        }
                        res += '</a>' +
                            '</div>' +
                            '<div class="property-desc text-center">' +
                            '<div class="property-desc-top">' +
                            '<h6><a href="detalle-inmuebles.php?dt='+data[i].Codigo_Inmueble+'">' + data[i].Barrio + '</a></h6>' +
                            '<h4 class="price">' + data[i].Canon + '</h4>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        j++;
                        if (j > 3) {
                            break;
                        }
                    }
                }
                $("#propiedades").append(res);
    
            }
    
        }

    );


});

