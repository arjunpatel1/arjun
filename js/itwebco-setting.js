$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
var topBorderWidth = $('.topBorder').outerWidth();
var topBorderHeight = $('.topBorder').outerHeight();

(function (jQuery) {

    function getStyle(elem, name) {
        return elem.currentStyle && elem.currentStyle[name] || elem.style[name];
    }

    function getClip(elem) {
        var cssClip = jQuery(elem).css('clip') || '';
        if (!cssClip) {
            var pieces = {
                top: getStyle(elem, 'clipTop'),
                right: getStyle(elem, 'clipRight'),
                bottom: getStyle(elem, 'clipBottom'),
                left: getStyle(elem, 'clipLeft') };


            if (pieces.top && pieces.right && pieces.bottom && pieces.left) {
                cssClip = 'rect(' + pieces.top + ' ' + pieces.right + ' ' + pieces.bottom + ' ' + pieces.left + ')';
            }
        }

        // Strip commas and return.
        return cssClip.replace(/,/g, ' ');
    }

    jQuery.fx.step.clip = function (fx) {
        if (fx.pos === 0) {
            var cRE = /rect\(([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)\)/;

            fx.start = cRE.exec(getClip(fx.elem));
            if (typeof fx.end === 'string') {
                fx.end = cRE.exec(fx.end.replace(/,/g, ' '));
            }
        }
        if (fx.start && fx.end) {
            var sarr = new Array(),earr = new Array(),spos = fx.start.length,epos = fx.end.length,
                emOffset = fx.start[ss + 1] == 'em' ? parseInt($(fx.elem).css('fontSize')) * 1.333 * parseInt(fx.start[ss]) : 1;
            for (var ss = 1; ss < spos; ss += 2) {sarr.push(parseInt(emOffset * fx.start[ss]));}
            for (var es = 1; es < epos; es += 2) {earr.push(parseInt(emOffset * fx.end[es]));}
            fx.elem.style.clip = 'rect(' +
                parseInt(fx.pos * (earr[0] - sarr[0]) + sarr[0]) + 'px ' +
                parseInt(fx.pos * (earr[1] - sarr[1]) + sarr[1]) + 'px ' +
                parseInt(fx.pos * (earr[2] - sarr[2]) + sarr[2]) + 'px ' +
                parseInt(fx.pos * (earr[3] - sarr[3]) + sarr[3]) + 'px)';
        }
    };
})(jQuery);
var IntervalTimer = 1;
varAnmiSpeed = 1000;
setInterval(function () {
    $(window).resize(function () {
        var topBorderWidth = $('.topBorder').outerWidth();
        var topBorderHeight = $('.topBorder').outerHeight();
    });
    $('.topBorder').animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + (topBorderHeight - topBorderHeight + 2) + 'px 0px)' }, varAnmiSpeed);
    $('.topBorder').animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + topBorderHeight + 'px ' + (topBorderWidth - 2) + 'px)' }, varAnmiSpeed);
    $('.topBorder').animate({ 'clip': 'rect(' + (topBorderHeight - 2) + 'px ' + topBorderWidth + 'px ' + topBorderHeight + 'px 0px)' }, varAnmiSpeed);
    $('.topBorder').animate({ 'clip': 'rect(0px ' + (topBorderWidth - topBorderWidth + 2) + 'px ' + topBorderHeight + 'px 0px)' }, varAnmiSpeed);

    $('.bottomBorder').animate({ 'clip': 'rect(' + (topBorderHeight - 2) + 'px ' + topBorderWidth + 'px ' + topBorderHeight + 'px 0px)' }, varAnmiSpeed);
    $('.bottomBorder').animate({ 'clip': 'rect(0px ' + (topBorderWidth - topBorderWidth + 2) + 'px ' + topBorderHeight + 'px 0px)' }, varAnmiSpeed);
    $('.bottomBorder').animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + (topBorderHeight - topBorderHeight + 2) + 'px 0px)' }, varAnmiSpeed);
    $('.bottomBorder').animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + topBorderHeight + 'px ' + (topBorderWidth - 2) + 'px)' }, varAnmiSpeed);

    IntervalTimer = varAnmiSpeed * 4;
}, IntervalTimer);
$('#feel-the-wave').wavify({
    height: 80,
    bones: 4,
    amplitude: 60,
    color: '#0160b080',
    speed: .15
});
$('#feel-the-wave-two').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#0160B0CC',
    speed: .25
});