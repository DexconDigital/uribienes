<?php

function Conect() {
    # $echo = mysqli_connect( "localhost", "biinyuco_afizus", "Afiz2018*", "biinyuco_afiz" );
    # return $echo;
    try {
        $echo2 = new PDO( 'mysql:host=localhost;dbname=dexcondigital_noticias_inmueble', 'root', '' );
        $echo2->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
        $echo2->exec("set names utf8");
        return $echo2;

    } catch ( Exception $e ) {

        die( 'Error:' . $e->getMessage() );
    }
}

?>
