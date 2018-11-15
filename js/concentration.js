$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";

    $(window).on('load resize',function(){
        height_check("fitem");

    });
    $(".card").on(click,function(){
        $(this).addClass("kurukuru");
    });

    function height_check(classname){
        $("." + classname).each(function(i,elm){
            $(elm).height($(elm).width() * 1.3);

        });
    }

})
