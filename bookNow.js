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
    onSelect: function (date, inst) {
        pickDate(new Date(date));
    },
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

});
// switch book-now-page to schedule page
$('.appointment--book-now').on('click', function () {
    $('.container--book-now').css('display', 'none');
    $('.section-title-wrapper').css('display', 'block');
    $('.container--schedule').css('display', 'block');
    $('.form-container').css('display', 'none');
    $('.last-step').addClass('disabled');
});

// back from schedule page to book-now-page
$('.back').on('click', function () {
    $('.container--schedule').css('display', 'none');
    $('.container--book-now').css('display', 'block');
    $('.section-title-wrapper').css('display', 'none');
    $('.form-container').css('display', 'none');
});


// weekly or monthly view of calendar
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

var formatDate = function (date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    return months[month] + " " + day + ", " + year;
};


var pickDate = function (date) {
    $('.appointment-hours').css('display', 'block');
    $('.last-step-date').text(formatDate(date));
};

//shows hours in weekend
$('.ui-datepicker-week-end').on('click', function () {
    $('.no-available-hours').css('display', 'block');
    $('.appointment-hours').css('display', 'none');
});

//on schedule page in last-step div show offer name and price
$('#book-now-page').on('click', '.appointment--book-now', function () {
    var offerNum = $(this.closest('.offers')).index();
    var offerTitle = $(".container--book-now .offer").eq(offerNum - 1).text();
    var offerPrice = $(".container--book-now .price").eq(offerNum - 1).text();
    $('.last-step-title').text(offerTitle);
    $('.last-step-price').text(offerPrice);

});

//shows choose hour in last-step div
$('.appointment-hours .hour').on('click', function () {
    var hour = $(this).text();
    $('.last-step-hour').text(hour);
    $('.last-step').removeClass('disabled');
    $('.appointment--last-step').removeClass('disabled');


});

//switch schedule page to form page
$('.appointment--last-step').on('click', function () {
    $('.form-container').css('display', 'block');
    $('.container--schedule').css('display', 'none');
    formLastStep();
    $('.form-last-step').addClass('disabled');
});

//
var formLastStep = function () {
    var title = $('.last-step-title').text();
    var price = $('.last-step-price').text();
    var date = $('.last-step-date').text();
    var hour = $('.last-step-hour').text();
    $('.form-last-step-title').text(title);
    $('.form-last-step-price').text(price);
    $('.form-last-step-date').text(date);
    $('.form-last-step-hour').text(hour);
};


//
// $('.appointment--book-now').trigger('click');
// $('.appointment--last-step').trigger('click');