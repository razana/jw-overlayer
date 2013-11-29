$(function(){

    $('.overlayer').hide();

    $('.btn-click').click(function(){

        jwplayer('mediaplayer').pause(true);
        $('.overlayer').hide();
    });

    $('#gemai').click(function(){

        $('.overlayer').show();
    });

    $('#info').click(function(){

        $('#overlayer-info').show();
    });

    $('#prev').click(function(){

        $('.overlayer').show();
    });

    $('#stream').click(function(){

        $('.overlayer').show();
    });

    $('#rent').click(function(){

        $('.overlayer').show();
    });

    $('#buy').click(function(){

        $('#overlayer-buy').show();
    });

    $('#gift').click(function(){

        $('.overlayer').show();
    });

    $('#share').click(function(){

        $('.overlayer').show();
    });

    $('#aff').click(function(){

        $('.overlayer').show();
    });

    $('#ov-close').click(function(){

        $('.overlayer').hide();
        jwplayer('mediaplayer').play();
    });
});