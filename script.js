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
var hash = window.location.hash;

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

$('.bottom').click(function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 1500);
});

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
    clearInterval(autoSlide);
    changeActiveDot($(this).index());
    changeActivePhoto($(this).index());
    currentIndex = getCurrentPhotoIndex();
    startSlideshow();
};

$('.dot').on('click', onDotClick);

var autoSlide;
var currentIndex = 0;
var photos = $('.slide');

var startSlideshow = function () {
    autoSlide = setInterval(function () {
        currentIndex++;
        if (currentIndex > photos.length - 1) {
            currentIndex = 0;
        }
        console.log(currentIndex);
        changeActivePhoto(currentIndex);
        changeActiveDot(currentIndex);

    }, 4000);
};

startSlideshow();


