// 메일 입력창
$(".select_box img").click(function(){
    $(".select_box input").css({"background-color":"#FCFCFC", "box-shadow":"none"});
    $(".select_box input").toggleClass("place_on");
    $(".select_box .bg").toggle();
    $(".select_box ul").slideToggle(200);

    if( $(".select_box .bg").css("display") == "none" ){
        $(".select_box input").css({
            "background-color" : "#FCFCFC",
            "box-shadow" : "inset 0px 0px 8px #00000012"
        });
    }

});

$(".select_box ul li").click(function(){
    $(".select_box ul").slideUp();
    $(".select_box .bg").toggle();

    if( $(".select_box .bg").css("display") == "none" ){
        $(".select_box input").css({
            "background-color" : "#FCFCFC",
            "box-shadow" : "inset 0px 0px 8px #00000012"
        });
    }
});


