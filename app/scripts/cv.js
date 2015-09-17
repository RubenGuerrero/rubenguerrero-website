var App = (function(){
    'use strict';

    var headerPositioned = function(){
        var header  = $('header'),
            headerPosition = header.position().top,
            headerHeight = header.height(),
            headerBottom = headerPosition + headerHeight - 150;

        var nav = $('nav');


        $(document).scroll(function(){
            var top = $(document).scrollTop();
            if(top >= headerBottom){
                nav.fadeIn();
            }else{
                hideMenu();
                nav.fadeOut();
            }
        });
    };

    var menuMobile = function(){
        var link = $('nav .menu-show');
        var menu = $('nav .primary-menu');

        link.click(function(e){
            e.preventDefault();
            if(!menu.is(':visible')){
                menu.slideDown('fast');
            }else{
                menu.slideUp('fast');
            }
        });
    };

    var menuAnchors = function(){
        $('nav .primary-menu a').click(function(e){
            e.preventDefault();
            var $el = $(this);
            var to = $('section.' + $el.attr('href').replace('#', '')).position().top;
            var scrollTo = to - 120;
            $('body').animate({scrollTop: scrollTo}, 'fast', 'swing');
            hideMenu();
        });
    };

    var hideMenu = function(){
        var menu = $('nav .primary-menu');
        menu.hide();
    };

    var wayPointsInit = function(){

        var skills = $('section.skills .skillslist .skill');
        $('section.skills').waypoint(function(direction) {
            if(direction === 'down'){
                skills.css('width', 0);
                skills.each(function(elem, el){
                    var $el = $(el);
                    var w   = $el.attr('data-w');
                    $el.animate({
                        width: w+'%'
                    });
                });
            }
        }, { offset: 120 });

    };

    var init = function(){
        $('section.skills .skillslist .skill').css('width', 0);
        headerPositioned();
        menuMobile();
        menuAnchors();
        wayPointsInit();
    };

    return {
        init: init
    };

})($);

$(function(){
    'use strict';
    App.init();
});
