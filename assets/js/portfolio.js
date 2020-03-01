$(window).scroll(function(event) {
    var menu = $('#container-fluid');
    var isPositionFixed = menu.hasClass('fixed');

    if ($(this).scrollTop() > window.innerHeight -40 && !isPositionFixed)
        menu.addClass('fixed');

    if ($(this).scrollTop() < window.innerHeight -40 && isPositionFixed)
        menu.removeClass('fixed');
});

$('#burger').on('click', function () {
    if ($('#mobile-menu').hasClass('mobile-menu-active')) {
        $('#mobile-menu').removeClass('mobile-menu-active');
        $('#burger').find('i').text('menu');
    } else {
        $('#mobile-menu').addClass('mobile-menu-active');
        $('#burger').find('i').text('clear');
    }
});

$(document).ready(function () {
    $('#burger').on('click', function () {
        if ($('#mobile-menu').hasClass('mobile-menu-active')) {
            $('#mobile-menu').removeClass('mobile-menu-active');
            $('#burger').find('i').removeClass('fa-times');
            $('#burger').find('i').addClass('fa-bars');
        } else {
            $('#mobile-menu').addClass('mobile-menu-active');
            $('#burger').find('i').addClass('fa-times');
            $('#burger').find('i').removeClass('fa-bars');
        }
    });
    var scrollObservedElements = [
        {
            el: document.getElementById("home"),
            linkId: 'home'
        },
        {
            el: document.getElementById("about"),
            linkId: "about"
        },
        {
            el: document.getElementById("project"),
            linkId: "project"
        },
        {
            el: document.getElementById("contact"),
            linkId: "contact"
        }
    ];
    var refreshMenu = function () {
        var scrollPosition = window.scrollY;
        // skini sve active klase
        scrollObservedElements.forEach(function (s) {
            $('a[href="#' + s.linkId + '"]').each(function () {
                $(this).parent().removeClass('active');
            });
        });
        // nadji element koji je trenutno vidljiv u viewportu
        var height = 0;
        var currentViewportElement;
        for (var i = 0; i < scrollObservedElements.length; i++) {
            height += scrollObservedElements[i].el.clientHeight;
            if (height > scrollPosition) {
                currentViewportElement = scrollObservedElements[i];
                break;
            }
        }
        // stavi active klasu na trenutni link
        if (currentViewportElement) {
            $('a[href="#' + currentViewportElement.linkId + '"]').each(function () {
                $(this).parent().addClass('active');
            });
        }
    };
    // inicijalan refresh menija
    refreshMenu();
    $(window).scroll(function (event) {
        var menu = $('#main-menu');
        var isPositionFixed = menu.hasClass('fixed');
 
        if ($(this).scrollTop() > window.innerHeight - 40 && !isPositionFixed)
            menu.addClass('fixed');
 
        if ($(this).scrollTop() < window.innerHeight - 40 && isPositionFixed)
            menu.removeClass('fixed');
 
        refreshMenu();
    });
});