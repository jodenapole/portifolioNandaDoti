// Fade da navbar quando scrolla a página
$(window).scroll(function(){
    $('nav').toggleClass('fade-scroll', $(this).scrollTop() > 20);
})
