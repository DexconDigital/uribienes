<!doctype html>
<html class="no-js" lang="en">
    <?php
    $codigo = $_GET["dt"];
    ?>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Detalle de Inmueble </title>
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
        <link href="single-inmuebles.php#" data-style="styles" rel="stylesheet"> 
        <!-- Modernizr JS -->
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>

    <body>
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
                                                <div class="col-sm-2" style="width: 9.666667%">
                                                    <a href="https://www.zonapagos.com/t_uribienes/pagos.asp" target="_blank">
                                                        <img src="img/pse.PNG" alt="" style="width: 80px;heigth:80px;" class="img-pse">
                                                    </a>
                                                </div>
                                                <div class="col-md-8 hidden-sm hidden-xs" style="width: 69.66666667%;">
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
            <div class="breadcrumbs overlay-black">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumbs-inner">
                                <div class="breadcrumbs-title text-center">
                                    <h1>Detalle de inmueble <?php echo $codigo;?></h1>
                                </div>
                                <div class="breadcrumbs-menu">
                                    <ul>
                                        <li><a href="index.html">INICIO /</a></li>
                                        <li>Detalle de inmueble <?php echo $codigo;?></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Breadcrumbs end-->

            <!--Feature property section-->
            <div class="feature-property properties-list pt-130">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 col-xs-12 ">
                            <div class="single-property-details">
                            <div class="carousel slide" id="myCarousel" data-ride="carousel">
                                    <div class="carousel-inner" ></div>
                                <a  class="left carousel-control"  href="#myCarousel" data-slide="prev" style="top:30%;">
                                    <span class="glyphicon fa fa-toggle-left"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" data-slide="next" style="top:30%;">
                                    <span class="glyphicon fa fa-toggle-right"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                </div>
                                <div class="single-property-description">
                                    <div class="desc-title">
                                        <h5>Descripción</h5>
                                    </div>
                                    <div class="description-inner">
                                        <p class="text-1"> <span id="descripcion"></span></p>
                                    </div>
                                </div>
                                <div class="single-property-description">
                                    <div class="desc-title">
                                        <h5>Ubicación del Inmueble </h5>
                                    </div>
                                    <div class="description-inner" id="map" style="height: 300px; position: relative; overflow: hidden;">
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="sidebar right-side">
                                                                <div class="condition-amenities">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="property-condition">
                                                <div class="condtion-title">
                                                    <h5>Condición</h5>
                                                </div>
                                                <div class="property-condition-list">
                                                    <ul>
                                                        <li>
                                                            <img src="img/property/icon-6.png" alt="">
                                                            <span id="area"></span>
                                                        </li>
                                                        <li>
                                                            <img src="img/property/icon-7.png" alt="">
                                                            <span id="alcobas"> </span>
                                                        </li>
                                                        <li>
                                                            <img src="img/property/icon-8.png" alt="">
                                                            <span id="banios"> </span>
                                                        </li>
                                                        <li>
                                                            <img src="img/property/icon-9.png" alt="">
                                                            <span id="garajes"> </span>
                                                        </li>
                                                        <li><span id="precio"> </span></li>
                                                    </ul>
                                                    <div class="property-location">
                                                        <img src="img/property/icon-5.png" alt=""><span id="ubicacion"> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="amenities">
                                                <div class="amenities-title">
                                                    <h5>Amenities</h5>
                                                </div>
                                                <div class="amenities-list">
                                                    <ul>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Air Conditioning</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Bedding</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Balcony</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Cable TV</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Internet</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Parking</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>lift</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Pool</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Dishwasher</span></li>
                                                        <li><i class="fa fa-check-square-o"></i> <span>Toaster</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            <!--Inicio Buscador de muebles--> 
                              <!--  <aside class="single-side-box search-property">
                                    <div class="aside-title">
                                    <h3><span>ENCUENTRA EL</span> HOGAR DE TUS SUEÑOS</h3>
                                    </div>
                                    <div class="find_home-box">
                                        <div class="find_home-box-inner">
                                            <form action="#">
                                                <div class="find-home-cagtegory">
                                                    <div class="row">

                                                        <div class="col-md-6">
                                                            <div class="find-home-item custom-select ">                  
                                                            <select class="selectpicker" title="Ciudad" data-hide-disabled="true" data-live-search="true" id="ciudad">
                                                            </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="find-home-item custom-select">                  
                                                            <select class="selectpicker" title="Tipo de Inmueble" data-hide-disabled="true" data-live-search="true"id="inmueble">
                                                            </select>
                                                            </div> 
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="find-home-item no-caret  custom-select">                  
                                                            <select class="selectpicker" title="Zona" data-hide-disabled="true" data-live-search="true" id="zona">
                                                            </select>
                                                            </div> 
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="find-home-item no-caret  custom-select">                  
                                                            <select class="selectpicker" title="Operación" data-hide-disabled="true" data-live-search="true" id="operacion">
                                                            </select>
                                                            </div>
                                                        </div>

                                                        <div class="find-home_bottom">
                                                            <div class="col-md-12">
                                                                <div class="find-home-item">
                                                                <button type="submit" id="search">BUSCAR</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            </div>
                                        </div>
                                </aside>Fin buscador de muebles--> 
                                <!--Inicio Inmuebles destacados--> 
                                <!-- <aside class="single-side-box feature">
                                    <div class="aside-title">
                                    <h3>INMUEBLES DESTACADOS</h3>
                                    </div>
                                    <div class="feature-property">
                                        <div class="row" id="propiedades">
                                        </div>
                                    </div>
                                </aside> -->
                                <!--Fin Inmuebles destacados--> 


                                <!-- <aside class="single-side-box agent">
                                    <div class="aside-title">
                                        <h5>Our Agent</h5>
                                    </div>
                                    <div class="our-agent-sidbar">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <div class="single-agent">
                                                    <div class="agent-img">
                                                        <a href="agent-details.html">
                                                            <img src="img/team/1.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="agent-title">
                                                        <h6><a href="agent-details.html">Evan Smith</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <div class="single-agent">
                                                    <div class="agent-img">
                                                        <a href="agent-details.html">
                                                            <img src="img/team/2.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="agent-title">
                                                        <h6><a href="agent-details.html">Evan Smith</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <div class="single-agent">
                                                    <div class="agent-img">
                                                        <a href="agent-details.html">
                                                            <img src="img/team/3.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="agent-title">
                                                        <h6><a href="agent-details.html">Evan Smith</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <div class="single-agent">
                                                    <div class="agent-img">
                                                        <a href="agent-details.html">
                                                            <img src="img/team/4.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="agent-title">
                                                        <h6><a href="agent-details.html">Evan Smith</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <div class="single-agent">
                                                    <div class="agent-img">
                                                        <a href="agent-details.html">
                                                            <img src="img/team/5.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="agent-title">
                                                    <h6><a href="agent-details.html">Evan Smith</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <div class="single-agent">
                                                    <div class="agent-img">
                                                        <a href="agent-details.html">
                                                            <img src="img/team/6.jpg" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="agent-title">
                                                        <h6><a href="agent-details.html">Evan Smith</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside> -->
                                <!-- <aside class="single-side-box tags">
                                    <div class="aside-title">
                                        <h5>Tags</h5>
                                    </div>
                                    <div class="our-tag-list">
                                        <ul>
                                            <li><a href="single-inmuebles.php#">Real Estate</a></li>
                                            <li><a href="single-inmuebles.php#">Home</a></li>
                                            <li><a href="single-inmuebles.php#">Appartment</a></li>
                                            <li><a href="single-inmuebles.php#">Duplex villa</a></li>
                                            <li><a href="single-inmuebles.php#">But property</a></li>
                                        </ul>
                                    </div>
                                </aside> -->
                                <!-- <aside class="single-side-box video">
                                    <div class="aside-title">
                                        <h5>Take a tour</h5>
                                    </div>
                                    <div class="video-sidebar">
                                        <div class="video-img">
                                            <img src="img/common/video.jpg" alt="">
                                        </div>
                                        <div class="play-button">
                                            <a href="https://youtu.be/vb5KLYAtPIs"><i class="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </aside> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Feature property section end-->

<footer class="footer wow fadeIn" id="footer" data-wow-duration="1.3s" data-wow-delay="0.5s"></footer>
</div> 
        
        
        <!-- quick view start -->
       
        <!-- quick view end -->
        
                <!--=================================
        style-customizer start  -->

        <!-- style-customizer End -->
        
        <!-- Placed js at the end of the document so the pages load faster -->

        
        
        <!-- Map js code here -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAj9b_nyz33KEaocu6ZOXRgqwwUZkDVEAw"></script>
        <script src="js/map.js"></script>

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

        
        <?php echo "<script> var codigoInm ='" . $codigo . "';</script>"; ?>
        <script>
            var latitud = 0;
            var longitud = 0;
            $.ajax({
                url: "http://www.simi-api.com/ApiSimiweb/response/v2/inmueble/codInmueble/" + codigoInm + "",
                async: true,
                type: "GET",
                dataType: "json",
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(
                        "Authorization",
                        'Basic ' + btoa('Authorization:xdsIhY3Ih3Gd9A24G6FAgsScSuVQb3h7ZV8NaCPh-691')
                    );
                },
                success: function(data) {
                    console.log(data);
                    if(data.msn == "Inmueble NO Disponible"){
				   openModal();
				   return;
			   }
                        var j = 1;
                        var carrousel = '';
                        if (data.fotos == undefined) {
                            carrousel += '<div class="item active">' +
                                    '<img src="img/no_image.png" alt="" id="tam-img" style="width: 100%;height: 562px;"/>'+
                                    '</div>';
                        } else {
                            carrousel += '<div class="item active">' +
                                    '<img src="' + data.fotos[0].foto + '" alt="" id="tam-img" style="width: 100%;height: 562px;"/>'+
                                '</div>';

                            for (var y = 1; y < Object.keys(data.fotos).length - 1; y++) {
                                if (data.fotos[y].foto != undefined) {
                                    carrousel += '<div class="item">' +
                                    '<img src="' + data.fotos[y].foto + '" alt="" id="tam-img" style="width: 100%;height: 562px;"/>'+
                                        '</div>';
                                    j++;
                                }
                            }
                        }

                    $(".carousel-inner").html(carrousel);

                    $('#mycarousel').carousel();
                    $("#precio").append("$ "+data.precio);
                    $("#ubicacion").append(data.barrio + ", " + data.ciudad + ", " + data.depto);
                    $("#alcobas").append(data.alcobas);
                    $("#banios").append(data.banos);
                    $("#garajes").append(data.garaje);
                    $("#area").append(data.AreaConstruida + " mts<sup>2</sup>");
                    $("#codigo").append(data.idInm);
                    $("#estrato").append(data.Estrato);
                    $("#administracion").append(data.Administracion);
                    $("#venta").append("$ "+data.ValorVenta);
                    $("#descripcion").text(data.descripcionlarga);
                
                    $("#gestion").html('<a title="'+data.Gestion+'" style="background: #00a3e2">'+data.Gestion+'</a>');
                    $("#tipo").append('<a title="'+data.Tipo_Inmueble+'" style="background: #00a3e2">'+data.Tipo_Inmueble+'</a>');

                    latitud = data.latitud;
                    longitud = data.longitud;

                    console.log("lat: "+latitud)
                    console.log("long: "+longitud)

                    initMap(latitud, longitud);
                },
                error: function(data) {
                    console.log("Fail");
                }
            });

            function initMap(latitud, longitud) {
                var uluru = {
                    lat: parseFloat(latitud),
                    lng: parseFloat(longitud)
                };
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 17,
                    center: uluru
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });
            }
            function openModal(){
		   $("body").append('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
					 '<div class="modal-dialog" role="document">'+
					   '<div class="modal-content">'+
						 '<div class="modal-header">'+
						   '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>'+
						   '<h4 class="modal-title" id="myModalLabel">Descripción del inmueble</h4>'+
						 '</div>'+
						 '<div class="modal-body">'+
						 'El inmueble no existe en Uribienes'+
						 '</div>'+
						 '<div class="modal-footer">'+
						   '<button type="button" class="btn btn-default" data-dismiss="modal" onclick="redirect()">Cerrar</button>'+
						 '</div>'+
					   '</div>'+
					 '</div>'+
				   '</div>');
				   
			   $(".modal").modal();
			   setTimeout(() => { 
				   redirect();
			   }, 3000);
	   }
	   function redirect(){
		   window.history.back();
	   }
        </script>

    </body>

</html>