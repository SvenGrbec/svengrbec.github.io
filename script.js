$(document).ready(function () {
    
    $("#photo").css("height", $(window).height());
    $("#bio").css("height", $(window).height());
    $("#video").css("height", $(window).height());

    //GALLERY
    
	$("#rightArrow, #rightPhoto").click(function () {
	    rightPhoto();
	});


    $("#leftArrow, #leftPhoto").click(function () {
        leftPhoto();
    });

});

$(window).resize(function () {

    $("#photo").css("height", $(window).height());
    $("#bio").css("height", $(window).height());
    $("#video").css("height", $(window).height());

});

function gotovideo() {
    $("html, body").animate({
        scrollTop: $("#video").offset().top
    }, 1500);
};

function gotophoto() {
    $("html, body").animate({
        scrollTop: $("#photo").offset().top
    }, 1500);
};

function gotobio() {
    $("html, body").animate({
        scrollTop: $("#bio").offset().top
    }, 1500);
};

function rightPhoto() {

    var picsRight = [];
    picsRight[0] = "http://svengrbec.github.io/images/img02.jpg";
    picsRight[1] = "http://svengrbec.github.io/images/img04.jpg";
    picsRight[2] = "http://svengrbec.github.io/images/img06.jpg";
    picsRight[3] = "http://svengrbec.github.io/images/img08.jpg";
    picsRight[4] = "http://svengrbec.github.io/images/img10.jpg";

    if (navigator.product == 'Gecko') {
        for (i = 0; i <= 5; i++) {
            if ($("#rightPhoto").css("background-image") == 'url("' + picsRight[i] + '")') {
                if (i == 4) {
                    $("#rightPhoto").css("background-image", 'url("' + picsRight[0] + '")');
                    break;
                }
                $("#rightPhoto").css("background-image", 'url("' + picsRight[i + 1] + '")');
                break;
            }
        }
    }

    for (i = 0; i <= 5; i++) {
        if ($("#rightPhoto").css("background-image") == 'url(' + picsRight[i] + ')') {
            if (i == 4) {
                $("#rightPhoto").css("background-image", 'url(' + picsRight[0] + ')');
                break;
            }
            $("#rightPhoto").css("background-image", 'url(' + picsRight[i + 1] + ')');
            break;
        }
    }
};

function leftPhoto() {

    var picsLeft = [];
    picsLeft[0] = "http://svengrbec.github.io/images/img01.jpg";
    picsLeft[1] = "http://svengrbec.github.io/images/img03.jpg";
    picsLeft[2] = "http://svengrbec.github.io/images/img05.jpg";
    picsLeft[3] = "http://svengrbec.github.io/images/img07.jpg";

    if (navigator.product == 'Gecko') {
        for (i = 0; i <= 4; i++) {
            if ($("#leftPhoto").css("background-image") == 'url("' + picsLeft[i] + '")') {
                if (i == 3) {
                    $("#leftPhoto").css("background-image", 'url("' + picsLeft[0] + '")');
                    break;
                }
                $("#leftPhoto").css("background-image", 'url("' + picsLeft[i + 1] + '")');
                break;
            }
        }
    }

    for (i = 0; i <= 4; i++) {
        if ($("#leftPhoto").css("background-image") == 'url(' + picsLeft[i] + ')') {
            if (i == 3) {
                $("#leftPhoto").css("background-image", 'url(' + picsLeft[0] + ')');
                break;
            }
            $("#leftPhoto").css("background-image", 'url(' + picsLeft[i + 1] + ')');
            break;
        }
    }
};


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        leftPhoto();
    }
    else if (e.keyCode == '39') {
        rightPhoto();
    }
}