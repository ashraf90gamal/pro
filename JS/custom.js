/*global $, alert, console*/

$(function () {

    'use strict';

    // Adjust Header Height 

    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function () {

        myHeader.height($(window).height());

    });


    //about

    //Links add active class

    $('.links2 li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    })

    //smooth scroll to div
    $('.links2 li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);


    });


    $('.bun3').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })

    $('.bun4').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })


    $('.bun5').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })


    $('.bun6').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })

    $('.lix').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })


    $('.liy').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })


    $('.liz').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })
    $('.icon').click(function () {
        $('html,body').animate({

            scrollTop: $('#nav').offset().top

        }, 1000);
    })
    // testimonials  


    $('.test .image5').click(function () {

        if ($(this).hasClass('image5')) {
            $('.test  .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.ass1').addClass('active').fadeIn();
            })
        }
    });





    //Third 

    var leftArrow = $('.third .fa-chevron-left'),
        rightArrow = $('.third .fa-chevron-right')

    function checkClients() {
        $('.inves:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.inves:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }

    checkClients();

    $('.third i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

            $('.third .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.inves').addClass('active').fadeIn();

                checkClients();

            });

        } else {


            $('.third .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.inves').addClass('active').fadeIn();

                checkClients();

            });
        }

    });
});


