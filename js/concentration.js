$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";
    var picknum = 0;
    var pick_first = 0;
    var pick_second = 0;
    var firstcard;
    var card_no_ar = [];
    var moveflg = true;
    var secondcard;

    var shuffle = function() {return Math.random()-.5}
    for($x = 0;$x < $(".card").length;$x++){
        card_no_ar.push($x +1);
        card_no_ar.push($x +1);
//        $("#test").append($x+1 + "|");
    }
//    $("#test").append("<br />");
    card_no_ar.sort(shuffle);
//    for($x = 0;$x < card_no_ar.length;$x++){

//        $("#test").append(card_no_ar[$x] + "|");
//    }

    $(window).on('load resize',function(){

        height_check("fitem");

    });
    $(".card").on(click,function(){
        if(!moveflg){
            return false;
        }
        var idx = $(".card").index(this);

        var card_no = card_no_ar[idx];

        $(this).find(".ura").find("img").attr("src","https://www.nejigram.com/assets/img/stamp/"+ str_zero(card_no,3) +".png");

        $(this).addClass("kurukuru");

        picknum += 1;
        if(picknum == 2){
            pick_second = card_no;
            if(pick_first == pick_second){
                $("#test").append("yes!");
            }else{
                $("#test").append("no!");
                moveflg = false;
                secondcard = $(this);
                setTimeout(function(){
                    firstcard.removeClass("kurukuru");
                    secondcard.removeClass("kurukuru");
                    moveflg = true;
                },1500);

            }

            picknum = 0;
            pick_first = 0;
            pick_second = 0;

        }else{
            firstcard = $(this);
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
