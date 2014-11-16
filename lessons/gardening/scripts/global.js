// Start slideshows for lessons with random delay
(function(){
	var contW;
	var orientation;
	orientation="landscape";
		
	$(document).ready(function() {		
		// Init global audio player
		var globalAudio = genAudio('global_audio', '', '#global_audio_box');
		globalAudio.jPlayer({
			ready: function (event) {
				$(this).jPlayer("setMedia", {
					mp3:"assets/silence.mp3"
				});
			},
			swfPath: "scripts/jPlayer",
			supplied: "mp3",
			wmode: "window"
		});
		globalAudio.bind($.jPlayer.event.ended, function(event) {
			$('.audio_summary.playing').removeClass('playing');
		});
		
		// Init lesson narration player
		var narrAudio = genAudio('lesson_audio', '#lesson_narration', '#global_audio_box');
		$('#lesson_audio').jPlayer({
			ready: function (event) {
				$(this).jPlayer("setMedia", {
					mp3:"assets/silence.mp3"
				});
			},
			swfPath: "scripts/jPlayer",
			cssSelectorAncestor: "#lesson_narration .jp-audio",
			supplied: "mp3",
			wmode: "window"
		});
		pauseOthers(narrAudio);
	});
	
})();

function loadLesson(lesson) {
	// Temporary simple link script for loading a "lesson" page
	window.location = lesson;
}

// jPlayer helper functions
function isPlaying(audioPlayer) {
	return !$(audioPlayer).data().jPlayer.status.paused;
}

// Play global player with options: 'playpause', 'restart' or 'wait'
function playAudio(audioPlayer, option) {
	if (!$(audioPlayer).length)
		return;
	var paused = !isPlaying(audioPlayer);
	switch (option) {
		case 'playpause':
			// if playing, pause and vice versa
			if (paused) {
				$(audioPlayer).jPlayer("play");
			} else {
				$(audioPlayer).jPlayer("pause");
			}
			break;
		case 'restart':
			// if playing, restart clip
			$(audioPlayer).jPlayer("play", 0);
			break;
		case 'wait':
			// if playing, do nothing, else play
			if (paused) {
				$(audioPlayer).jPlayer("play");
			} else {
				return;
			}
			break;
		default:
			// default to play pause
			// if playing, pause and vice versa
			if (paused) {
				$(audioPlayer).jPlayer("play");
			} else {
				$(audioPlayer).jPlayer("pause");
			}
			break;
	}
}

function stopAudio(audioPlayer) {
	$(audioPlayer).jPlayer("stop");
	if (audioPlayer === '#global_audio') {
		$('.audio_summary.playing').removeClass('playing');
	}
}

function updateAudio(audioPlayer, audioFile) {
	$(audioPlayer).jPlayer("setMedia", {
		mp3: audioFile + ".mp3"
	});
}