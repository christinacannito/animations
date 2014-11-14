var lessonNumber = 0;
var pages = [];

function doStart(){
	$.getScript("scripts/lesson_data.js", function(script, textStatus, jqXHR){
		// create the course map here with info from lesson_data
		var tiles = '';
		var less = lesson.individualLessons;
		for (var ind in less) {
			console.log(ind); // index numbers (images should go from 0 and up)
			tiles += '<div class="col-sm-4">';
			tiles += '<div class="thumbnail ind_lesson" id="' + ind + '">';
			tiles += '<img src="../../img/martha/martha_' + ind + '.jpg" alt="" />';
			tiles += '<div class="caption">';
			tiles += '<h3>' + less[ind].title + '</h3>';
			tiles += '<p>' + less[ind].description + '</p>';
			tiles += '<p><a href="#" class="btn btn-primary" role="button"><i class="fa fa-volume-up fa-2x"></i></a></p>';
			tiles += '</div>';
			tiles += '</div>';
			tiles += '</div>';
		}
		$('#map_info').append(tiles);

		$('.ind_lesson').click(function(){
			lessonNumber = $(this).attr('id');
			openLesson(lessonNumber, 0);
		})
	});
}

function goToPage() {
	console.log("lessonNumber in goToPage: ",lessonNumber);
	console.log("currentPage in goToPage: ",currentPage);
	var ajaxTar = 'martha_lessons/lesson' + lessonNumber + '/martha_lesson_' + currentPage + ".html";
	
	$('#map_info').fadeOut(function(){ // fading out 
    $(this).hide();
    console.log(ajaxTar);
		$("#course_lessons").load(ajaxTar);
	});

	$("#course_lessons").load(ajaxTar);
}

function openLesson(lessonNum, pageNum) {
	pages = lesson.individualLessons[lessonNum];
	console.log("PAGES! ",pages);
	currentPage = pageNum;
	buildNav();
	goToPage();
}

function buildNav() {
	// Fill in nav
	$('#lesson_navigation ul').css('left', 0);
	// var nav = $('#lesson_nav .thumbnails ul').html('');
	for ( var ind in pages.slides ) {
		console.log("HERE HERE");
		console.log(pages.slides[ind]);
		console.log("parseInt");
		console.log(parseInt(ind));
		var slide = pages.slides[ind];
		if (parseInt(ind) == parseInt(currentPage)) {
			var li = '<li class="active_thumb" style="background-image: url(\'martha_lessons/lesson' + lessonNumber + '/martha' + ind + '.png\');"><span>' + ind + '</span></li>';
			console.log("list item in if: ",li);
		} else {
			var li = '<li style="background-image: url(\'martha_lessons/lesson' + lessonNumber + '/martha' + ind + '.png\');"><span>' + ind + '</span></li>';
		}
		console.log("LIST ITEM: ",li);
		$("#thumbnail_img").append(li);
	}	

	$("#thumbnail_img li").click(function(){
		// alert("was clicked.");
		currentPage = parseInt($(this).text()); // this is how you get access to the thumbnail number
		goToPage(currentPage);
	});
}







































