document.addEventListener('DOMContentLoaded', function(event){

    var tl = new TimelineMax();

    tl.from('#panel1', 0.5, {autoAlpha:0})
    .from('#panel1 h1', 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})

});
