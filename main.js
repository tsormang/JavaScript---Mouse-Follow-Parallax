var timeout;
$('#container').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);

});

function callParallax(e) {
    parallaxIt(e, '.slide.one', -10);
    parallaxIt(e, '.slide.two', -15);
    parallaxIt(e, '.slide.three', -20);
    parallaxIt(e, '.slide.four', -25);
    parallaxIt(e, '.slide.five', -40);
    parallaxIt(e, 'img', -10);
}

function parallaxIt(e, target, movement) {
    var $this = $('#container');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}