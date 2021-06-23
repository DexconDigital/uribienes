<?php
require_once 'conexion.php';

$nombre = $_REQUEST["titulo"];
$descripcion = $_REQUEST["descripcion"];
$fecha = $_REQUEST["fecha"];
$noticia = $_POST["noticia"];
$foto = $_FILES["imagen"]["name"];
$ruta = $_FILES["imagen"]["tmp_name"];
$nombre_foto = str_replace( " ", "", $foto );
$destino = "fotos/".$nombre_foto;

$con = Conect();
copy( $ruta, $destino );

$sql = ( "insert into noticias (nombre,descripcion,imagen,noticia,fecha,id_inmobiliaria2) values('$nombre','$descripcion','$destino','$noticia','$fecha','19')" );
$result = $con->prepare( $sql );
$result->execute();
header( "Location: noticias.php" );
?>