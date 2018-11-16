$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";
    var picknum = 0;
    var pick_first = 0;
    var pick_second = 0;
    var firstcard;
    var secondcard;
    var card_no_ar = [];
    var moveflg = true;
    var str_ng = 0;
    var str_nice = 0;
    var str_score = 0;
    var str_time = 0;
    var timer_num = 0;
    var nice_num = 0;
    var timer;

    score_set("ng",0);
    score_set("nice",0);
    score_set("score",0);

    function score_set(type,num){
        if(type =="ng"){
            str_ng += num;
            $("#str_ng").html(str_ng);
        }else if(type == "nice"){
            str_nice += num;
            $("#str_nice").html(str_nice);
        }else if(type == "score"){
            str_score += num;
            $("#str_score").html(str_score);
        }
    }


    var shuffle = function() {return Math.random()-.5}
    for($x = 0;$x < $(".card").length /2;$x++){
        card_no_ar.push($x +1);
        card_no_ar.push($x +1);
    }
    card_no_ar.sort(shuffle);

    $(window).on('load resize',function(){

        height_check("fitem");

    });
    var clicknum = 0;
    $(".card").on(click,function(){
        if(!moveflg){
            return false;
        }
        if(clicknum == 0){
            timer = setInterval(function(){
                timer_num++;

                $("#str_time").html(Math.floor(timer_num / 6000) + ":" +str_zero((Math.floor(timer_num / 100)) % 60,2) +":" + str_zero(timer_num % 100,2));

            },10);
        }
        var idx = $(".card").index(this);

        var card_no = card_no_ar[idx];

        $(this).find(".ura").find("img").attr("src","https://www.nejigram.com/assets/img/stamp/"+ str_zero(card_no,3) +".png");

        $(this).addClass("kurukuru");

        picknum += 1;
        if(picknum == 2){
            pick_second = card_no;
            if(pick_first == pick_second){
                $(this).addClass("bk_gry");
                firstcard.addClass("bk_gry");
                score_set("nice",10);
                score_set("score",10);
                nice_num++;
                if(nice_num == $(".card").length /2){
                    clearInterval(timer);

                }

            }else{
                moveflg = false;
                secondcard = $(this);
                setTimeout(function(){
                    firstcard.removeClass("kurukuru");
                    secondcard.removeClass("kurukuru");
                    score_set("ng",10);
                    score_set("score",-10);
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
        clicknum++;
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
