<?php
header( 'Access-Control-Allow-Origin: *' );
require_once( "bd_function.php" );

$con = Conect();
$array = array();

$sql = "SELECT * FROM noticias where id_inmobiliaria2 = 19 order by id DESC";
$result = $con->prepare( $sql );
$result->execute();
$resultado = $result->fetchAll();

foreach ( $resultado as $key => $field ) {
    $nombre = $field['nombre'];
    $id = $field['id'];
    $descripcion = $field['descripcion'];
    $imagen = $field['imagen'];
    $noticia = $field['noticia'];
    $fecha = $field['fecha'];
    $array[] = array(
        'titulo' => $nombre,
        'id' => $id,
        'descripcion' => $descripcion,
        'imagen' => $imagen,
        'noticia' => $noticia,
        'fecha' => $fecha
    );
}


$json_string = json_encode( $array, JSON_UNESCAPED_UNICODE );
echo $json_string;