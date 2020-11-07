$("#filtro").keyup(function() {
    var texto = $(this).val();

    $(".lista").each(function() {
        var resultado = $(this).text().toUpperCase().indexOf(' ' + texto.toUpperCase());

        if (resultado < 0) {
            $(this).fadeOut();
        } else {
            $(this).fadeIn();
        }
    });

});