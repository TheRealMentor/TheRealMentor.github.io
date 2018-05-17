$(window).on('load', function(){
    var title = $('.main-heading');
    var description = $('.description');
    var navbar = $('.navbar');
    var preloader = $('.preloader-container');
    var card = $('.card');

    setTimeout(function(){
        preloader.addClass('animated zoomOut');
    }, 1200);

    setTimeout(function(){
        preloader.css('display', 'none'); 
    }, 1500);                   

    setTimeout(function(){
        navbar.addClass('animated fadeInDown');
        navbar.css('display', 'block');
    }, 1500);                    


    setTimeout(function(){
        title.addClass('animated pulse');
        title.css('display', 'inline-block');
    }, 2500); 

    setTimeout(function(){
        description.addClass('animated zoomIn');
        description.css('display', 'inline');
    }, 3500);

    setTimeout(function(){
        card.addClass('animated fadeIn');
        card.css('display', 'block');
    }, 4000);

});