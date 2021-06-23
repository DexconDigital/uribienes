<!doctype html>
<html class="no-js" lang="en">
<?php
require_once("notices/bd_function.php");

$codigo = $_GET["id"];

$con = Conect();

$sql = "SELECT * FROM noticias WHERE id = $codigo";
$result = $con->prepare( $sql );
$result->execute();
$resultado = $result->fetchAll();
    
foreach ( $resultado as $key => $field ) {
    $nombre = $field['nombre'];
    $id = $field['id'];
    $descripcion = $field['descripcion'];
    $imagen = $field['imagen'];
    $noticia = $field['noticia'];
    $fecha_complete = strtotime($field['fecha']);
}

?>

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>NOTICIA <?php echo $nombre; ?></title>
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
    <!-- customizer style css -->
    <link rel="stylesheet" href="css/style-customizer.css">
    <link rel="stylesheet" href="css/Style-B.css">
    <link href="noticias.html#" data-style="styles" rel="stylesheet">

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
                                        <div class="col-sm-2">
                                            <a href="https://www.zonapagos.com/t_uribienes/pagos.asp" target="_blank">
                                                <img src="img/pse.PNG" alt="" style="width: 80px;heigth:80px;" class="img-pse">
                                            </a>
                                        </div>
                                        <div class="col-md-8 hidden-sm hidden-xs">
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
                                <h1>NOTICIA <?php echo $id; ?></h1>
                            </div>
                            <div class="breadcrumbs-menu">
                                <ul>
                                    <li><a href="index.html">INICIO /</a></li>
                                    <li>NOTICIAS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumbs end-->

        <!--Latest blog start-->
        <div class="blog-pages pt-130">
            <div class="container">
                <div class="blog-each-item" id="notice-info">
                    <div class="row">
                        <article class="post-item">
                            <div class="shadow-bottom-items">
                                <div class="img-noticias">
                                    <img src="noticias-uribienes/admin/<?php echo $imagen;?>" alt="<?php echo $descripcion; ?>" class="imagen-noticia">
                                </div>
                            </div>
                            <div class="post-inner">
                                <div class="post-content">
                                    <div class="post-title">
                                        <h3><?php echo $nombre ?></h3>
                                    </div>
                                    <div class="post-entry" style="word-wrap: break-word;">
                                        <div id="calendario">
                                         
                                        </div>
                                        <p><?php echo $noticia?></p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <!--Latest blog end-->

        <!--Brand section end-->
        <footer class="footer wow fadeIn" id="footer" data-wow-duration="1.3s" data-wow-delay="0.5s"></footer>
    </div>

    <!-- quick view start -->
    <div class="modal fade" role="dialog" tabindex="-1" id="quick-view">
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
                                <p><a href="noticias.html#">Lost your password?</a></p>
                            </div>
                            <div class="login">
                                <button type="button">Sign in</button>
                            </div>
                        </form>
                        <div class="login-with-another">
                            <a class="facebook" href="noticias.html#"><i class="icofont icofont-social-facebook"></i> Login with Facebook</a>
                            <a class="linkedin" href="noticias.html#"><i class="icofont icofont-brand-linkedin"></i> Login with Linkedin</a>
                            <a class="google" href="noticias.html#"><i class="icofont icofont-social-google-plus"></i> Login with Google</a>
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


    <!--asignacion de valores a variables js-->
    <?php echo "<script>var titulo =' " . $nombre . "'</script>"; ?>
    <?php echo "<script>var id =' " . $id . "'</script>"; ?>
    <?php echo "<script>var descripcion =' " . $descripcion . "'</script>"; ?>
    <?php echo "<script>var imagen =' " . $imagen . "'</script>"; ?>
    <?php echo "<script>var noticia =' " . $noticia . "'</script>"; ?>
    <?php echo "<script> var año = ".date('Y', $fecha_complete)."</script>";?>
    <?php echo "<script> var mes = ".date('m', $fecha_complete)."</script>";?>
    <?php echo "<script> var dia = ".date('d', $fecha_complete)."</script>";?>
    <script>
        var imagen = 'http://biinyu.com.co/afiz/afiz-noticias/admin/' + imagen + '';

        imagen = imagen.replace(/\s/g, '');

        var noticia = '<div class="welcome-title">' +
            '<h3 class="title-1" style="text-align:center"><span>' + titulo + '</span></h3>' +
            '</div>' +
            '<br>' +
            '<div class="col-xs-8 col-xs-offset-2">' +
            '<a title="' + descripcion + '">' +
            '<img class="img-responsive" src="' + imagen + '" alt="' + descripcion + '" style="min-width: 100%;"/>' +
            '</a>' +
            '<br>' +
            '<br>' +
            '<div class="welcome-content" style="margin-bottom: 100px;">' +
            '<div class="fecha">' +
            '<span>Fecha de publicación: ' + año + "-" + mes + "-" + dia + '</span>' +
            '</div>' +
            '<div>' + noticia + '</div>' +
            '</div>';

        //$("#notice-info").html(noticia);

    </script>

</body>

</html>
