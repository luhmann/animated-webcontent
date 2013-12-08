$(function () {

	window.JF = window.JF || {};
	JF.stop = function (position) {
		window.clearInterval(JF.references[position]);
	}
	
	JF.references = [];

	JF.references.push(animateSprite($('.rm-3sec-468'), 9504, 36, 12));
	JF.references.push(animateSprite($('.rm-3sec-228'), 4644, 36, 12));
	JF.references.push(animateSprite($('.fm-3sec-468'), 9504, 36, 12));

});

var animateSprite = function ($object, spriteHeight, totalFrames, fps) {
	var spriteOffset = 0,
		stepSize = spriteHeight / totalFrames;

	var reference = window.setInterval(function () {
		spriteOffset =  (-1 * (spriteOffset - stepSize) < spriteHeight) ? spriteOffset -  stepSize : 0;
		$object.css('background-position',  '0px ' + spriteOffset + 'px');
	}, Math.ceil(1000/fps));

	return reference;
};

