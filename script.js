var hash = window.location.hash;

function initMap() {
    var position = {lat: 37.770069, lng: -122.387336};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: position,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
}

var scrollToHash = function (elementId) {
    var $targetElement = $(elementId);
    var position = $targetElement.offset();
    var mainMenuHeight = $('.top-wrapper').height();

    $("html, body").animate({scrollTop: position.top - mainMenuHeight}, 1500);
};

if (hash) {
    scrollToHash(hash);
}

$(".main-menu a").on("click", function () {
    var elementId = $(this).attr('href');
    scrollToHash(elementId);
});

$('.bottom').click(function () {
    scrollToHash(hash);
});

//    $("a[href='#service-page']").click(function() {
//        $("html, body").animate({ scrollTop: 754 }, 1500);
//        return false;
//    });
//
//    $("a[href='#about-clinic-page']").click(function() {
//        $("html, body").animate({ scrollTop: 1493 }, 1500);
//        return false;
//    });
//
//    $("a[href='#contact-page']").click(function() {
//        $("html, body").animate({ scrollTop: 2095 }, 1500);
//        return false;
//    });
//
//    $("a[href='#photo-page']").click(function() {
//        $("html, body").animate({ scrollTop: 0 }, 1500);
//        return false;
//    });


var changeActiveDot = function (index) {
    $('.dot')
        .eq(index)
        .addClass('active')
        .siblings().removeClass('active');
};

var changeActivePhoto = function (index) {
    $('.slide')
        .eq(index)
        .addClass('slide-active')
        .siblings().removeClass('slide-active');
};

var getCurrentPhotoIndex = function () {
    return $('.slide.slide-active').index();
};

var onDotClick = function (event) {

    changeActiveDot($(this).index());
    changeActivePhoto($(this).index());

currentIndex = getCurrentPhotoIndex();

};

$('.dot').on('click', onDotClick);


var currentIndex = 0;
var photos = $('.photo-container div');
var dots = $('.dots span');

var cyclePhotos = function () {
  var photo = $('.photo-container div').eq(currentIndex);
  photos.removeClass('slide-active');
  photo.addClass('slide-active');
};

var cycleDots = function () {
  var dot = $('.dots span').eq(currentIndex);
  dots.removeClass('active');
  dot.addClass('active');
};

var autoSlide = setInterval (function () {
   currentIndex++;
   if (currentIndex > photos.length -1) {
       currentIndex = 0;
   }
    cycleDots();
   cyclePhotos();

}, 3000);

// slideIndex = 0;
// var stopped = false;
// showSlides();
//
// function showSlides() {
//     if (stopped) {
//         return;
//     }
//     var i;
//     var slides = $('.slide');
//     var dots = $('.dot');
//     for (i = 0; i < slides.length; i++) {
//         $(slides[i]).removeClass('slide-active');
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     for (i = 0; i < dots.length; i++) {
//         $(dots[i]).removeClass('active');
//     }
//     $(slides[slideIndex - 1]).addClass('slide-active');
//     $(dots[slideIndex - 1]).addClass('active');
//
//
//     setTimeout(showSlides, 4000);
// }


