$.ajax({
    url: 'notices/noticesJSON.php',
    type:"GET",
    dataType: "json",
    success: function(data) {
        console.log(data)
        var result = "";
        var j = 0;
        for (var i in data) {
            result += '<div class="col-md-4 col-sm-6 col-xs-12">'+
                        '<div class="single-blog mb-60 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s" style="visibility: visible; animation-duration: 1.2s; animation-delay: 0.2s; animation-name: fadeInUp;">'+
                            '<div class="blog-thubmnail">'+
                                '<a href="detalle_noticia.php?id='+data[i].id+'">'+
                                    '<img src="noticias-uribienes/admin/'+data[i].imagen+'" alt="">'+
                                '</a>'+
                                '<div class="blog-post">'+
                                    '<span class="post-day">'+
                                        data[i].fecha+
                                    '</span>'+
                                '</div>'+
                            '</div>'+
                            '<div class="blog-desc">'+
                                '<h6><a href="detalle_noticia.php?id='+data[i].id+'">'+data[i].titulo+'</a></h6>'+
                                '<p class="post-content">'+data[i].descripcion+'</p>'+
                                '<div class="bolg-continue">'+
                                    '<a href="detalle_noticia.php?id='+data[i].id+'">Leer más  &gt;</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
                j++;
                if (j > 3) {
                    break;
                }
        }
        $("#ulti-noticias").append(result);


    },
    error: function(data) {
        console.log(data);
    }
});