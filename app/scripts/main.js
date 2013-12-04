$(function () {
	/*$('.hd-low-motion-sprite').spritespin({
		width: 1920,
		height: 1080,
		frames: 36,
		resX: 1920,
		resY: 38880,
		source: '../images/spritespin/sprites_full_size.jpg'
	});*/

	$('.hd-low-motion-sprite').spChangeDir('down').sprite({fps: 12, no_of_frames: 36, dir: 'up'});
});
