// Player creation index
var jpCount = 1;

// Replace all HTML5 video and audio tags in given selector with jPlayer equivalents
function jpUpdate(target) {
	console.log("jpUpdate");
	var audios = $(target).find('audio');
	audios.each(function(i){
		if (!ie8_lower) {
			$(this).get(0).pause();
		}
		initAudio($(this));
	});
	if (hasMXEngage == false) {
		var videos = $(target).find('video');
		videos.each(function(i){
			if (!ie8_lower) {
				$(this).get(0).pause();
			}
			initVideo($(this));
		});
	}
}

// Insert a new audio jPlayer and controller with given ID into insert selectors. Return player element
function genAudio(id, insertControls, insertPlayer) {
	console.log("id: ",id);
	console.log("insertControls: ",insertControls);
	console.log("insertPlayer: ",insertPlayer);
	// console.log("genAudio");
	var player = genPlayer(id);
	console.log("player: ",player);
	if (insertControls) {
		console.log("inside if statement");
		var controls = genControls('audio');
		console.log("controls: ",controls);
		$(controls).appendTo(insertControls);
	}
	return $(player).appendTo(insertPlayer);
}

// Insert a new video jPlayer and controller with given ID into insert selectors. Return player element
function genVideo(id, insertControls, insertPlayer) {
	console.log("genVideo");
	var player = genPlayer(id);
	var controls = genControls('video');
	var returner = $(player).appendTo(insertPlayer);
	$(controls).appendTo(insertControls);
	return returner;
}

function genControls(playerType) {
	console.log("genControls");
	var jpClass = "";
	
	switch (playerType) {
		case 'audio':
			jpClass = 'jp-audio';
			break;
		case 'video':
			jpClass = 'jp-video';
			break
	}
	
	var controls = '<div id="jp_container_' + jpCount + '" class="' + jpClass + '">';
		controls +=		'<div class="jp-type-single">';
		controls +=			'<div class="jp-gui jp-interface">';
		controls +=				'<ul class="jp-controls">';
		controls +=					'<li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>';
		controls +=					'<li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>';
		controls +=					'<li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>';
		controls +=				'</ul>';
		controls +=				'<div class="jp-progress">';
		controls +=					'<div class="jp-seek-bar">';
		controls +=						'<div class="jp-play-bar"></div>';
		controls +=					'</div>';
		controls +=				'</div>';
		controls +=				'<div class="jp-time-holder">';
		controls +=					'<div class="jp-current-time"></div>';
		controls +=					'<div class="jp-duration"></div>';
		controls +=				'</div>';
		controls +=			'</div>';
		controls +=			'<div class="jp-no-solution">';
		controls +=				'<span>Update Required</span>';
		controls +=				'To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>. Sorry for the inconvenience.';
		controls +=			'</div>';
		controls +=		'</div>';
		controls += '</div>';
		
		jpCount++;
		return controls;
}

function genPlayer(id) {
	console.log("genPlayer");
	return '<div id="' + id + '" class="jp-jplayer"></div>';
}

function initAudio(replaceTar) {
	console.log("initAudio");
	// Extract audio file
	var srcs = [];
	var files = {};
	$(replaceTar).find('source').each(function(i){
		var thisrc = $(this).attr('src');
		console.log("thisrc: ",thisrc);
		var ext = thisrc.substring( thisrc.lastIndexOf(".") + 1 );
		srcs.push(ext);
		files[ext] = thisrc;
	});
	
	var replacer = $('<div class="jp-rep audio-rep"></div>');
	var wrapper = replaceTar.replaceWith(replacer);
	var repAudio = genAudio('audio_' + jpCount, replacer, replacer);
	repAudio.jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", files);
		},
		swfPath: "scripts/jPlayer",
		cssSelectorAncestor: '#jp_container_' + (jpCount - 1),
		wmode: "window"
	});
	pauseOthers(repAudio);
}

function initVideo(replaceTar) {
	console.log("initVideo");
	// Extract video file
	var srcs = [];
	var files = {};
	$(replaceTar).find('source').each(function(i){
		var thisrc = $(this).attr('src');
		var ext = thisrc.substring( thisrc.lastIndexOf(".") + 1 );
		switch (ext) {
			case 'ogg':
				ext = 'ogv';
				break;
			case 'mp4':
				ext = 'm4v';
				if (!is_safari) {
					thisrc = "../../" + thisrc;
				}
				break;
			case 'm4v':
				ext = 'm4v';
				if (!is_safari) {
					thisrc = "../../" + thisrc;
				}
				break;
		}
		srcs.push(ext);
		files[ext] = thisrc;
	});
	var vW = $(replaceTar).attr('width');
	var vH = $(replaceTar).attr('height');
	var aP = $(replaceTar).attr('autoplay');
	
	var replacer = $('<div class="jp-rep video-rep"></div>');
	var wrapper = replaceTar.replaceWith(replacer);
	var repVideo = genVideo('video_' + jpCount, replacer, replacer);
	replacer.find('.jp-video').width(vW);
	replacer.find('.jp-interface').width(vW-16);
	repVideo.jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", files);
			if (aP) {
				$(this).jPlayer("play");
			} else {
				$(this).jPlayer("pause", 0.01);
			}
		},
		swfPath: "scripts/jPlayer",
		cssSelectorAncestor: '#jp_container_' + (jpCount - 1),
		supplied: srcs.toString(),
		size: {
			width: vW,
			height: vH,
			cssClass: "jp-video-rep"
		},
		wmode: 'opaque'
	});
	pauseOthers(repVideo);
}