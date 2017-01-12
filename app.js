document.addEventListener('DOMContentLoaded', function(event){
    var tl = new TimelineMax();
    tl.from('#panel1', 0.5, {autoAlpha:0})
    .from('#panel1 h1', 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
    .set('#panel2', {top:0}, "+=2")
    .from('#panel2', 0.2, {autoAlpha:0, scale:1.5})
    .from('#panel2 h2', 0.2, {top:250}, "+=0.5")
    .to('#panel2 h2', 0.2, {top:250}, "+=2")
    .set('#panel3', {top:0}, "final")
    .from('#info', 0.5, {top:250}, "final")
    .to('#panel2', 0.5, {top:-60}, "final")
    .staggerFrom('li', 0.3, {autoAlpha:0, left:10}, 0.1, "+=0.2")
    .from('#orderNow', 0.5, {scale:0, autoAlpha:0, ease:Back.easeOut});
});
