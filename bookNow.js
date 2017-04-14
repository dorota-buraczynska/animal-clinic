//    $('div.offers').on('click', function () {
//        $("#" + $(this).attr('id') + ' .information').slideToggle('3000');
//        $("#" + $(this).attr('id') + ' .sign').toggleClass('sign-up');
//    });

$('.offer').on('click', function () {
    var $offer = $(this);
    $offer.closest('.offers').find('.information').slideToggle(1000);
    $offer.find('.sign').toggleClass('sign-up');
});

$("a[href='#book-now-page']").click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $("html, body").animate({scrollTop: 0}, 1500);
});

$('#calendar').datepicker({
    prevText: "<",
    nextText: ">",
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

});




//$('.appointment--book-now')