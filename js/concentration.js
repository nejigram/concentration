$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";
    var picknum = 0;
    var pick_first = 0;
    var pick_second = 0;
    var card_no_ar = [];

    var shuffle = function() {return Math.random()-.5}
    for($x = 0;$x < $(".card").length;$x++){
        card_no_ar.push($x +1);
        card_no_ar.push($x +1);
    }
    card_no_ar.sort(shuffle);

    $(window).on('load resize',function(){
        height_check("fitem");

    });
    $(".card").on(click,function(){
        var idx = $(".card").index(this);

        var card_no = str_zero(card_no_ar[idx],3);

        $(this).find(".ura").find("img").attr("src","https://www.nejigram.com/assets/img/stamp/"+ card_no +".png");

        $(this).addClass("kurukuru");

        picknum += 1;
        if(picknum == 2){
            pick_second = card_no;
            if(pick_first == pick_second){
                $("#test").append("yes!");
            }else{
                $("#test").append("no!");
                setTimeout(function(){
                    $(".card").removeClass("kurukuru");

                },1500);

            }

            picknum = 0;
            pick_first = 0;
            pick_second = 0;

        }else{
            pick_first = card_no;

        }
    });

    function height_check(classname){
        $("." + classname).each(function(i,elm){
            $(elm).height($(elm).width() * 1.3);

        });
    }
})
function str_zero(num,length){
    return ('0000000000' + num).slice(-length);
}

function random_int(min,max) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min ;
}
