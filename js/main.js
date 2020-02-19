/*----------------------
   Template Name: Haven Real Estate html5 template
    Description: This is html5 template
    Author: Devitems
    Version: 1.0
---------------------------*/
(function($) {
    "use strict";

    var menu = '<ul>' +
        '<li><a href="index.html">Inicio</a></li>' +
        '<li><a href="quienes-somos.html">Quiénes somos</a></li>' +
        '<li><a href="servicios.html">Servicios</a></li>' +
        '<li><a href="inmuebles.php">Inmuebles</a></li>' +
        '<li><a href="clientes.html">Clientes</a></li>' +
        '<li><a href="asesores.html">Asesores</a></li>' +
        '<li><a href="noticias.html">Noticias</a></li>' +
        '<li><a href="contacto.html">Contáctanos</a></li>' +
        '</ul>';

        $("#menu").html(menu);
        
    var footer = '<div class="footer-top">'+
    '<div class="container" style="width:100%">'+
    '<div class="row">'+
    '<div class="col-md-12">'+
    '<div class="map-area">'+
    '<div id="contact-map" class="map-area">'+
    '<div id="contact-map"></div>'+
    '</div>'+             
    '<div class="footer-desc">'+
    '<div class="single-footer-contact" style="padding: 51px 27px; text-align: left;">'+
    '<div class="newsletter">'+
    '<div class="contact-head">'+
    '<h2>CONTÁCTANOS</h2>'+
    '</div>'+
    '<div class="f-contact-details">'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-1.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Sede Poblado Opción 1</p>'+
    '<p>Carrera 43 A # 1 A Sur 69</p>'+
    '<p>Edificio Tempo, Oficina 601</p>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-2.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Medellín - Colombia</p>'+
    '<p>(57)(4) 444 67 66</p>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-3.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>E-mail:</p>'+
    '<p>uribienes@une.net.co</p>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="single-footer-contact" style="right: 33.3433%">'+
    '<div class="contact-head">'+
    '<h2>CONTÁCTANOS</h2>'+
    '</div>'+
    '<div class="f-contact-details">'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-1.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Sede Sabaneta Opción 2</p>'+
    '<p>Carrera 45 A # 70 Sur 15</p>'+
    '<br>'+
    '<br>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-2.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Medellín - Colombia</p>'+
    '<p>(57)(4) 444 67 66</p>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-3.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>E-mail:</p>'+
    '<p>uribienes@une.net.co</p>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="single-footer-contact" style="right: 0.1px">'+
    '<div class="contact-head">'+
    '<h2>CONTÁCTANOS</h2>'+
    '</div>'+
    '<div class="f-contact-details">'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-1.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Sede Occidente Opción 3</p>'+
    '<p>Carrera 80 # 50 - 76</p>'+
    '<br><br>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-2.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Medellín - Colombia</p>'+
    '<p>(57)(4) 444 67 66</p>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-3.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>E-mail:</p>'+
    '<p>uribienes@une.net.co</p>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="single-footer-contact" style="padding: 51px 27px;">'+
    '<div class="contact-head">'+
    '<h2>CONTÁCTANOS</h2>'+
    '</div>'+
    '<div class="f-contact-details">'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-1.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Sede La Estrella Opción 4</p>'+
    '<p>Cl 77 sur # 50ª - 195</p>'+
    '<p>local 118 PLAA 77 MALL PH </p>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-2.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>Medellín - Colombia</p>'+
    '<p>(57)(4) 444 67 66</p>'+
    '</div>'+
    '</div>'+
    '<div class="single-contact-list">'+
    '<div class="contact-icon">'+
    '<img src="img/icon/c-3.png" alt="">'+
    '</div>'+
    '<div class="contact-text">'+
    '<p>E-mail:</p>'+
    '<p>uribienes@une.net.co</p>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="footer-bottom">'+
    '<div class="container">'+
    '<div class="row">'+
    '<div class="col-md-4 col-sm-12 col-xs-12" style="margin: 1.5% 0; font-size: 18px;">'+
    '<div class="icon-fa">'+
    '<a href="https://www.facebook.com/Uribienes-propiedad-raiz-271388136583074/?fref=ts" target="_blank">'+
    '<i class="fa fa-facebook" id="form-logo"></i>'+
    '</a>'+
    '<a download="" href="POLITICAS_DE_PRIVACIDAD.PDF" style="color: #fff;font-size: 18px;font-family: Calibri, sans-serif;"> Descargue nuestra politica de datos</a>'+
    '</div>'+
    '</div>'+
    '<div class="col-md-8 col-sm-12 col-xs-12" id="form-politicas" style="font-size: 18px;">'+
    '<p>'+
    '<div class="copyright" style="margin-top: 30px;color: #fff;">Copyright   '+
    '© 2018'+
    '<a href="https://www.dexcondigital.com"  target="_blank" style="color: #fedb3c;"> Dexcon Digital. </a>Todos los derechos reservados'+
   
    '</div></p>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
    
    $("#footer").html(footer);

    /*-------------------------------------------
     	 jQuery MeanMenu
     --------------------------------------------- */
    jQuery('nav#dropdown').meanmenu();

    /*-------------------------------------------
    	 wow js active
    --------------------------------------------- */
    new WOW().init();

    /*-------------------------------------------
    	 toltip js active
    --------------------------------------------- */
    $('[data-toggle="tooltip"]').tooltip();

    /*----------------------------
       stickey menu
    ----------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 265) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

    $('.close-home').on('click', function() {
        $('.find-home-box').addClass('fadeOut');

    });

    /*----------------------
		Nivo slider activation
	----------------------*/
    $('#mainSlider').nivoSlider({
        directionNav: true,
        controlNavThumbs: false,
        animSpeed: 1000,
        slices: 10,
        pauseTime: 5000,
        pauseOnHover: true,
        controlNav: false,
        manualAdvance: true,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });
    /*-------------------------
      slider active
    ------------------------------ */
    $(".property-list").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });
    $(".happy-client-list").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        loop:true,
        items: 4,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });

    $(".brand-list").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });
    $(".property_list").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });

    /*------------------------------------    
      Search Bar
    --------------------------------------*/

    $('.search-icon a').on('click', function() {
        $('.header').toggleClass('search-box-show');
        return false;
    });

    $('.search-close-btn a').on('click', function() {
        $('.header').toggleClass('search-box-show');
        return false;
    });
    /*----------------------    
        magnificPopup active
    --------------*/
    $('.play-button a').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });
    /*----------------------    
        collpase active
    --------------*/
    $(".accordion-active").collapse({
        accordion: true,
        open: function() {
            this.slideDown(550);
        },
        close: function() {
            this.slideUp(550);
        }
    });


    /*--------------------
        You tube video active
    -------------------------*/
    $(".youtube-bg").YTPlayer({
        videoURL: "https://youtu.be/vb5KLYAtPIs",
        containment: '.youtube-bg',
        mute: true,
        loop: true,
        showControls: true

    });

    /*--------------------------
		 Parallax active
	----------------------*/
    $('.parallax').parallax("50%", 0.5);

    /*------------------
        5. Price Slider
    --------------------------*/
    $("#slider-range").slider({
        range: true,
        min: 20,
        max: 2500,
        values: [600, 2000],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));


    /*--------------------------
      Counter Up
    ---------------------------- */
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });

    /*-------------------------------------------
    	scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="icofont icofont-simple-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-----------------------------
    Loader activation here. 
    -------------------------------*/
    $("#fakeLoader").fakeLoader({
        timeToHide: 1500,
        zIndex: 999999,
        spinner: "spinner1", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor: "#fff"
    });


})
(jQuery);