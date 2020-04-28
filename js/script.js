$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $(".toTop").fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});
$('.toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
});

// ---------------------------------------gallery---------------------------------------------------
$(".gallery-more").click(function () {
    if ($(".gallery-more").text() === "View all") {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item").length; i++) {
            document.getElementsByClassName("portfolio-block-img__item")[i].style.display = "flex";
        }
        $(".gallery-more").text("Hide")
    }
    else {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item").length; i++) {
            if (i > 8) {
                document.getElementsByClassName("portfolio-block-img__item")[i].style.display = "none";
            }
            $(".gallery-more").text("View all")
        }
    }
})
$(".gallery-more2").click(function () {
    if ($(".gallery-more2").text() === "View all") {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item_2").length; i++) {
            document.getElementsByClassName("portfolio-block-img__item_2")[i].style.display = "flex";
        }
        $(".gallery-more2").text("Hide")
    }
    else {
        for (i = 0; i < document.getElementsByClassName("portfolio-block-img__item_2").length; i++) {
            if (i > 8) {
                document.getElementsByClassName("portfolio-block-img__item_2")[i].style.display = "none";
            }
            $(".gallery-more2").text("View all")
        }
    }
})

$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});
$(document).ready(function () {
    $('.popup-gallery2').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});


//-------------------------------slider------------------------------------

var slider = document.querySelector(".comment-slider");
var arrSliderItem = slider.children;
var numberSlider = document.querySelector(".comment-control__current-number-slider");
var btnPrev = document.querySelector(".comment-control__prev");
var btnNext = document.querySelector(".comment-control__next");
var correctNumberSlider = +numberSlider.innerText - 1;
var countSlider = document.querySelector(".comment-control__count-slider");
countSlider.innerText = arrSliderItem.length
function nextSlide() {
    for (var count = 0; count < arrSliderItem.length; count++) {
        arrSliderItem[count].style.display = "none";
    };
    arrSliderItem[correctNumberSlider].style.display = "flex";
    countSlider.innerText = arrSliderItem.length;
    numberSlider.innerText = correctNumberSlider + 1
};
nextSlide();
function sliderr() {
    if (correctNumberSlider <= arrSliderItem.length - 2) {
        correctNumberSlider += 1;
        nextSlide();
    }
    else {
        correctNumberSlider = 0;
        nextSlide();
    }
}
btnNext.addEventListener("click", function () {
    sliderr();
});
btnPrev.addEventListener("click", function () {
    if (!correctNumberSlider == 0) {
        correctNumberSlider -= 1;
        nextSlide();
    }
    else {
        correctNumberSlider = 7;
        correctNumberSlider -= 1;
        nextSlide();
    };
})

setInterval(sliderr, 5000);
//------------------------validate form--------------------------------------------
let form = document.querySelector(".contact-block-offer-form");
let form1 = document.querySelector(".communication-block");
let submit = document.querySelector(".contact-block-offer-form__input_submit");
let inputName = document.querySelector(".contact-block-offer-form__input_name");
let inputTel = document.querySelector(".contact-block-offer-form__input_tel");
form.addEventListener("click", () => {
    if (inputName.value !== "" && inputTel !== "") {
        submit.removeAttribute("disabled")
    }
    else { submit.setAttribute("disabled", "true") }
})
if (form1) {
    let submit = document.querySelector(".contact-block-offer-form__input_submit1");
    let inputName = document.querySelector(".contact-block-offer-form__input_name1");
    let inputTel = document.querySelector(".contact-block-offer-form__input_tel1");
    form1.addEventListener("click", () => {

        if (inputName.value !== "" && inputTel !== "") {
            submit.removeAttribute("disabled")
        }
        else { submit.setAttribute("disabled", "true") }
    })
}
window.onload = () => {
    let test = document.querySelector(".success")
    setTimeout(() => {
        if (window.location.search === "?mail=success") {
            test.classList.remove("d-none");
            test.classList.add("classAnimete-message");
        }
        else if (window.location.search === "?mail=error&type=forbidden_symbols") {
            document.querySelector(".error").classList.remove("d-none");
            document.querySelector(".error").classList.add("classAnimete-message");
        }
    }, 1000)

}

//------------------------------------------------------scroll to------------------------------
let headerBtn = document.querySelector(".header-caption-main__btn");



function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 40) speed = 40;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
if(headerBtn){
    headerBtn.addEventListener("click",()=>{
        elmYPosition("form");
        smoothScroll("form")
    })
}