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

$('.appointment--book-now').on('click', function () {
    $('.container--book-now').css('display', 'none');
    $('.form-container').css('display', 'none');
    $('.container--schedule').css('display', 'block');
});

$('.back').on('click', function () {
    $('.container--schedule').css('display', 'none');
    $('.container--book-now').css('display', 'block');
});

$('.weekly-view').on('click', function () {
    $('.ui-datepicker tr:first-child').siblings().toggleClass('invisible');
    var text = $('.weekly-view').text();
    if (text == "Weekly view") {
        $('.weekly-view').text('Monthly view');
        $('.weekly-view-container i')
            .removeClass('fa-angle-up')
            .addClass('fa-angle-down');
    } else {
        $('.weekly-view').text('Weekly view');
        $('.weekly-view-container i')
            .removeClass('fa-angle-down')
            .addClass('fa-angle-up');
    }
});
console.log($('#calendar a.ui-state-default'));
$('a.ui-state-default').on('click', function () {
    $('.appointment-hours').css('display', 'block');
    var month = $('.ui-datepicker-month').text();
    var day = $(this).text();
    console.log(day);
    var year = $('.ui-datepicker-year').text();
    $('.last-step-month').text(month);
    $('.last-step-day').text(day + ", ");
    $('.last-step-year').text(year);
});

$('.ui-datepicker-week-end').on('click', function () {
    $('.no-available-hours').css('display', 'block');
    $('.appointment-hours').css('display', 'none');
});

$('#book-now-page').on('click', '.appointment--book-now', function () {
    var offerNum = $(this.closest('.offers')).index();
    var offerTitle = $(".container--book-now .offer").eq(offerNum - 1).text();
    var offerPrice = $(".container--book-now .price").eq(offerNum - 1).text();
    $('.last-step-title').text(offerTitle);
    $('.last-step-price').text(offerPrice);

});

$('.appointment-hours .hour').on('click', function () {
    var hour = $(this).text();
    $('.last-step-hour').text(hour);
});

$('.appointment--last-step').on('click', function () {

    $('.form-container').css('display', 'block');
    $('.container--schedule').css('display', 'none');
});