<!doctype html>
<html class="no-js">
<?php

$gs = 0;
$ti = 0;
$ci = 0;
$zo = 0;

if (isset($_GET["gs"]) && isset($_GET["ti"]) && isset($_GET["ci"]) && isset($_GET["zo"])) {
    $gs = $_GET["gs"];
    $ti = $_GET["ti"];
    $ci = $_GET["ci"];
    $zo = $_GET["zo"];
}
?>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>INMUEBLES</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <!-- Place favicon.ico in the root directory -->
    <link rel="shortcut icon" href="img/logo/favicon.png" type="image/x-icon">
    <!-- All css files are included here. -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/core.css">
    <link rel="stylesheet" href="css/shortcode/shortcodes.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/slider.css">
    <!-- customizer style css -->
    <link rel="stylesheet" href="css/style-customizer.css">
    <link rel="stylesheet" href="css/Style-B.css">
    <link href="inmuebles.php" data-style="styles" rel="stylesheet">    

    <!-- Modernizr JS -->
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>
</head>
<style>
    .find-home-box.postion{
        top:38%;
    }
</style>
<body onload="imprimir(1)">
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->  
    <!--Preloader start-->
    <div id="fakeLoader"></div>
    <!--Preloader end-->
    <div class="wrapper white_bg">
        <!--Header section start-->
        <header class="header">
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div class="row">
                                <div class="row">
                                    <div class="row">
                                        <div class="row">
                                            <div class="col-md-2 col-sm-2 col-xs-6">
                                                <div class="logo">
                                                    <a href="index.html"><img src="img/logo/logo.png" alt="" style="width: 95px;heigth:80px;"></a>
                                                </div>
                                            </div>
                                            <div class="col-sm-2">
                                                <a href="https://www.zonapagos.com/t_uribienes/pagos.asp" target="_blank">
                                                    <img src="img/pse.PNG" alt="" style="width: 80px;heigth:80px;" class="img-pse">
                                                </a>
                                            </div>
                                            <div class="col-md-8 hidden-sm hidden-xs" >
                                                <div class="mgea-full-width">
                                                    <div class="header-menu">
                                                        <nav id="menu">
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Mobile menu start -->
                    <div class="mobile-menu-area hidden-lg hidden-md">
                        <div class="container">
                            <div class="col-md-12">
                                <nav id="dropdown">
                                    <ul>
                                        <li><a href="index.html">Inicio</a></li>
                                        <li><a href="quienes-somos.html">Quiénes somos</a></li>
                                        <li><a href="servicios.html">Servicios</a></li>
                                        <li><a href="inmuebles.php">Inmuebles </a> </li>
                                        <li><a href="clientes.html">Clientes</a></li>
                                        <li><a href="asesores.html">ASESORES</a></li>
                                        <li><a href="noticias.html"> Noticias</a></li>
                                        <li><a href="contacto.html"> Contáctanos</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!-- Mobile menu end -->
                </div>
            </header>
        <!--Header section end-->

        <!--Breadcrumbs start-->
        <div class="breadcrumbs overlay-black" >
            <div class="container">
                <div class="row">
                    <div class="col-md-12 margin-top-text" >
                        <div class="breadcrumbs-inner">
                            <div class="breadcrumbs-title">
                                <h1 style="text-align: center;">INMUEBLES</h1>
                            </div>
                            <div class="breadcrumbs-menu ">
                           
                            <!--Find home area start-->
                                <div class="finde-home-postion">
                                    <div class="container">
                                        
                                    </div>
                                </div>
                            <!--Find home area end-->
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!--Feature property section-->
        <div class="feature-property pt-130">
        <div class="container">
            <div class="row">
                <div class="find-home-box postion">
                                            <div class="find-home-box-inner">
                                                <div class="find-home-title">
                                                    <h3><span>ENCUENTRA EL</span> HOGAR DE TUS SUEÑOS</h3>
                                                </div>
                                                    <div class="find-home-cagtegory">
                                                        <div class="row">
                                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                                <div class="find-home-item custom-select ">
                                                                    <select class="selectpicker" title="Ciudad" data-hide-disabled="true" data-live-search="true" id="ciudad">
                                                                    <option class="bs-title-option" value="0">Ciudad</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                                <div class="find-home-item custom-select">
                                                                    <select class="selectpicker" title="Tipo de Inmueble" data-hide-disabled="true" data-live-search="true"id="inmueble">
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                                <div class="find-home-item custom-select">
                                                                    <select class="selectpicker" title="Zona" data-hide-disabled="true" data-live-search="true" id="zona">
                                                                        <option class="bs-title-option" value="0">Zona</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                                <div class="find-home-item custom-select">
                                                                    <select class="selectpicker" title="Operación" data-hide-disabled="true" data-live-search="true" id="operacion">
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="find-home-item custom-select ">
                                                <label style="color: #ffffff;">Código</label>
                                                <input class="selectpicker" title="Codigo" data-hide-disabled="true"
                                                    data-live-search="true" id="codeInm" placeholder="691-">
                                                    
                                            </div>
                                        </div>
                    
                                                            <div class="find-home-bottom">
                                                                <div class="col-md-12 col-sm-6 col-xs-12">
                                                                    <div class="find-home-item">
                                                                        <button type="submit" id="search">BUSCAR</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                <div id="inmb"></div>
                <div class="col-xs-12">                            <div class="pagination-area mb-60">                                <ul class="pagination-list text-center">                                    <div class="pagina" style="color:black;"></div>                                    <li id="anterior">                                        <a href="#" id="banterior" onclick="paginator('ant')"><i class="fa fa-angle-left" aria-hidden="true" id="flechas"></i></a>                                    </li>                                    <!-- <li><a href="#">1</a></li>                                    <li><a href="#">2</a></li> -->                                    <li id="siguiente">                                        <a href="#" id="bsiguiente" onclick="paginator('sig')"><i class="fa fa-angle-right" aria-hidden="true" id="flechas"></i></a>                                    </li>                                </ul>                            </div>                        </div>
            </div>
        </div>
        </div>
        <!--Feature property section end-->

        <!--Brand section start-->
            <!--<div class="brand-section">-->
                    <!-- <div class="container">
            <!--            <div class="row">-->
            <!--                <div class="col-md-8 col-md-offset-2">-->
            <!--                    <div class="section-title text-center">-->
            <!--                        <h3>NUESTROS ALIADOS</h3>-->
                                    
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="col-md-12">-->
                             
            <!--                        <div class="col-md-6">-->
            <!--                            <a target="_blank" href="http://www.ellibertador.co/"><img src="img/logo/logoAliado.png" alt=""></a>-->
            <!--                        </div>-->
            <!--                        <div class="col-md-6" style="margin: 1% 0%;">-->
            <!--                            <a target="_blank" href="http://www.segurosbolivar.com.co/wps/portal/SegurosBolivar/PersonasFamilias/Hogar/arrendamiento/QueEs/quessegurodearrendamiento/!ut/p/b1/hczNboJAFIbha-kFyDkwf2UJ_pRRmbYMIMzGYGsaaMFGjcpcvbR72rP6TvLkBQPlhDwSTxDiMSjAdNWl_qjO9aGrvn5-w7czNn2NNOXymSuBMpmzfP1ESbSksIEyHFQ5KBy5AP-PmF_yR6EcgBhvEEihQLrVTf8t7adNGqvdeCZdPWcrtLnSGUlVupDaH3ZjJNoMNboqbeKbRt7HKnp5z5MsDMLr7UQFLMHUu9a5vrUOOkwIF5knfETqc8ZhMwUVHdo9tObYTzpb2H3wcAeaKNfG/dl4/d5/L2dBISEvZ0FBIS9nQSEh/"><img src="img/logo/logoAliado2.png" alt=""></a>-->
            <!--                        </div>-->
                                
            <!--                </div>-->
            <!--            </div>-->
            <!--        </div> -->
            <!--    </div>-->
        <!--Brand section end-->
<footer class="footer wow fadeIn" id="footer" data-wow-duration="1.3s" data-wow-delay="0.5s"></footer>
    </div> 
     
     
     <!-- quick view start -->
    <div  class="modal fade" role="dialog" tabindex="-1" id="quick-view">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="register-page-form">
                        <div aria-label="Close" data-dismiss="modal" class="modal-header">
                            <span>x</span>
                        </div>
                        <div class="account-title">
                            <h5>Login</h5>
                        </div>
                        <form action="#">
                            <div class="username">
                                <input type="text" placeholder="Username">
                            </div>
                            <div class="password">
                                <input type="password" placeholder="Password">
                            </div>
                            <div class="agree-text">
                                <p><input type="checkbox"> <span>Remember me</span></p>
                            </div>
                            <div class="lost-password">
                                <p><a href="inmuebles.php#">Lost your password?</a></p>
                            </div>
                            <div class="login">
                                <button type="button">Sign in</button>
                            </div>
                        </form>
                        <div class="login-with-another">
                            <a class="facebook" href="inmuebles.php#"><i class="icofont icofont-social-facebook"></i> Login with Facebook</a>
                            <a class="linkedin" href="inmuebles.php#"><i class="icofont icofont-brand-linkedin"></i> Login with Linkedin</a>
                            <a class="google" href="inmuebles.php#"><i class="icofont icofont-social-google-plus"></i> Login with Google</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <!-- quick view end -->
    
            <!--=================================
     style-customizer start  -->

    <!-- style-customizer End -->
    
    <!-- Placed js at the end of the document so the pages load faster -->

    
    <!-- Map js code here -->
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAj9b_nyz33KEaocu6ZOXRgqwwUZkDVEAw"></script>
    

    <!-- All jquery file included here -->
    <script src="js/vendor/jquery-1.12.0.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.nivo.slider.pack.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/ajax-mail.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.magnific-popup.js"></script>
    <script src="js/style-customizer.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/search.js"></script>



    <?php echo '<script>var gs = ' . $gs . '</script>'; ?>
    <?php echo '<script>var ti = ' . $ti . '</script>'; ?>
    <?php echo '<script>var ci = ' . $ci . '</script>'; ?>
    <?php echo '<script>var zo = ' . $zo . '</script>'; ?>
    
    <script>
    if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("gestion", gs);
    localStorage.setItem("ciudad", ci);
    localStorage.setItem("tipo", ti);
    localStorage.setItem("zona", zo);
    
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
        
    </script>

    <script src="js/paginador.js"></script>
    
    <!--<script>
        if (gs == 0 && ci == 0 && ti == 0 && zo == 0) {
            $.ajax({
                url: 'http://www.simi-api.com/ApiSimiweb/response/v21/filtroInmueble/limite/0/total/1000/',
                type: 'GET',
                cache: true,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(
                        'Authorization',
                        'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691'));
                },
                'dataType': "json",
                success: function(data) {
                    console.log(data);
                    var res = "";
                    var count_inm = 0;
                    if (data == "Sin resultados") {
                        $("#property").html("<h1>No hay resultados según los filtros</h1>");
                        return;
                    }
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
                        count_inm++;
                    }
                    $("#property").html(res);
                }
            });
        }else {
            $.ajax({
                url: 'http://www.simi-api.com/ApiSimiweb/response/v21/filtroInmueble/limite/0/total/1000/departamento/0/ciudad/' + ci + '/zona/' + zo + '/barrio/0/tipoInm/' + ti + '/tipOper/' + gs + '/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0',
                type: 'GET',
                cache: true,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(
                        'Authorization',
                        'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691'));
                },
                'dataType': "json",
                success: function(data) {
                    console.log(data);
                    var res = "";
                    if (data == "Sin resultados") {
                        $("#result").html('<h1> No hay Inmuebles según los filtros</h1>');
                        return;
                    } else {
                        for (var i = 0; i < data.totalInmuebles; i++) {
                            if(data[i].Codigo_Inmueble != undefined){
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
                        }
                    }
                        $("#property").html(res);
                    }
                }
            });
        }
    </script>-->
    
</body>

</html>