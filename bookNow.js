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
    minDate: new Date(),
    showButtonPanel: true,
    inline: true,
    onSelect: function (date, inst) {
        pickDate(new Date(date));
        weekend(new Date(date));
        scrollToElement('.weekly-view');
    },
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

});


// switch book-now-page to schedule page
$('.appointment--book-now').on('click', function () {
    $('.container--book-now').hide();
    $('.section-title-wrapper').show();
    $('.container--schedule').fadeIn(1500);
    $('.last-step').addClass('disabled');
});

// back from schedule page to book-now-page
$('.container--schedule a.back').on('click', function () {
    $('.container--schedule, .section-title-wrapper').hide();
    $('.container--book-now').fadeIn(1500);
});

//back from form page to schedule page
$('.form-container a.back').on('click', function () {
    $('.container--schedule').fadeIn(1500);
    $('.container--book-now, .form-container').hide();
    $('.section-title-wrapper').show();
});

var changeWeeklyViewText = function (isMonthlyView) {

    $('.weekly-view').text(isMonthlyView ? 'Monthly view' : 'Weekly view');
    $('.weekly-view-container i')
        .toggleClass('fa-angle-up', !isMonthlyView)
        .toggleClass('fa-angle-down', isMonthlyView);

};

// weekly or monthly view of calendar
$('.weekly-view').on('click', function () {
    $('tr').has(' a.ui-state-active').siblings().toggleClass('invisible');

    var text = $('.weekly-view').text();
    var isMonthlyView = text == 'Weekly view';
    changeWeeklyViewText(isMonthlyView);
    scrollToElement('#calendar');
});

var formatDate = function (date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();

    return months[month] + " " + day + ", " + year;
};

var weekend = function (date) {
    var day = date.getDay();
    if (day == 6 || day == 0) {
        $('.appointment-hours').hide();
        $('.no-available-hours').show();
    }
};

var pickDate = function (date) {
    $('.appointment-hours').show();
    $('.no-available-hours').hide();
    $('.last-step-date').text(formatDate(date));
    //
    var text = $('.weekly-view').text();
    var isMonthlyView = text == 'Weekly view' && $('tr').hasClass('invisible');
    changeWeeklyViewText(isMonthlyView);
};


//on schedule page in last-step div show offer name and price
// $('#book-now-page').on('click', '.appointment--book-now', function () {
//     var offerNum = $(this).closest('.offers').index();
//     var offerTitle = $(".container--book-now .offer").eq(offerNum - 1).text();
//     var offerPrice = $(".container--book-now .price").eq(offerNum - 1).text();
//     $('.last-step-title').text(offerTitle);
//     $('.last-step-price').text(offerPrice);
//
// });
$('#book-now-page').on('click', '.appointment--book-now', function () {
    var $offer = $(this).closest('.offers');

    // var offerTitle = $('.offer', $offer).text();

    var offerTitle = $offer.find('.offer').text();
    var offerPrice = $offer.find('.price').text();
    $('.last-step-title').text(offerTitle);
    $('.last-step-price').text(offerPrice);
});

//shows chosen hour in last-step div
$('.appointment-hours .hour').on('click', function () {
    var hour = $(this).text();
    $('.last-step-hour').text(hour);
    $('.last-step').removeClass('disabled');

    $(this).closest('.appointment-hours').find('.hour').removeClass('hour-border');
    $(this).addClass('hour-border');

    scrollToElement('.last-step');
});

//switch schedule page to form page
$('.appointment--last-step').on('click', function () {
    $('.form-container').fadeIn(1500);
    $('.container--schedule').hide();
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

var scrollToElement = function (selector) {
    var position = $(selector).offset().top;
    var menuHeight = $('.menu-wrapper').height();
    $("html, body").animate({scrollTop: position - menuHeight}, 1500);
};

var validateForm = function () {
    var isValid = true;
    var re  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var $email = $('.required input[type=email]');
    var isEmail = re.test($email.val());
    $('.required input').each(function () {
        if ($(this).val() == '')  {
            isValid = false;
        }
    });
    if (isValid && isEmail) {
        $('.form-last-step').removeClass('disabled');
    }
};

$('.required input').on('input', function () {
   validateForm();
});