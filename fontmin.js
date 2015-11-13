var config = {
	fontsrc: './demo/fonts/*.ttf',
	fontdest:'./demo/dist/fonts',
	textsrc: './demo/src/index.html'
}







var readGlob = require('read-glob');
var Fontmin = require('fontmin');

function fontminScript(config){
	readGlob(config.textsrc, function(err, bufs) {
	  if (err) throw err;
		var fontmin = new Fontmin();
		fontmin
			.src(config.fontsrc)
			.use(Fontmin.glyph({ text: bufs.toString() }))
			.dest(config.fontdest)
			.run(function(err,files){
				if(err) throw err;
			});
	});
}
module.exports = fontminScript;
fontminScript(config);
