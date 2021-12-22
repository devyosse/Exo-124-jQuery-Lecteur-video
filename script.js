// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let play = $('.player__button');
let x = true;

play.click(function (){
    if(x === true){
        $(this).html( "►");
        player.get(0).play();
        x = false;
    }
    else if(x === false) {
        $(this).html("⏸");
        player.get(0).pause();
        x = true;
    }
})


player.click("timeupdate", () => {
    let progre = player.currentTime / player.duration;
    progress.style.width = progre * 100 + "%";
});

$("button").click(function (){
    switch ($(this).attr("data-skip")){
        case "-10":
            player[0].currentTime -= 10;
            $(this).html("« 10s");
            break;
        case "25":
            player[0].currentTime += 25;
            $(this).html("25s »");
            break;
    }
});


