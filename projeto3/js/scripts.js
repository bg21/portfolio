$(function(){
    $('header nav.desktop ul li a').mouseover(function(){
        $('header nav.desktop ul li a').removeClass('selected');
        $(this).addClass('selected');
    });

    $('nav.mobile h2 i').click(function(){
        $('nav.mobile ul').slideToggle();
    });

    if(window.innerWidth <= 960){
        $('section.etapas div.flex div.etapa_01 div.single_etapas').css('flexDirection', 'column');
    }

});