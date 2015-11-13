var config = {
	fontsrc: './demo/fonts/*.ttf',
	fontdest:'./demo/dist/fonts',
	textsrc: './demo/src/index.html'
}




var readGlob = require('read-glob');
var Fontmin = require('fontmin');

readGlob(config.textsrc, function(err, bufs) {
  if (err) throw err;
	runFontmin(bufs.toString())
});

var fontmin = new Fontmin();
function runFontmin(text){
	fontmin
		.src(config.fontsrc)
		.use(Fontmin.glyph({ text: text }))
		.dest(config.fontdest)
		.run(function(err,files){
			if(err) throw err;
		});
}
