var lessonNumber = 0;

function doStart(){
	$.getScript("scripts/lesson_data.js", function(script, textStatus, jqXHR){
		// create the course map here with info from lesson_data
		var tiles = '';
		var less = lesson.individualLessons;
		for (var ind in less) {
			console.log(ind); // index numbers (images should go from 0 and up)
			tiles += '<div class="col-sm-4">';
			tiles += '<div class="thumbnail ind_lesson" id="' + ind + '">';
			tiles += '<img src="../../img/arrangements/arrangement_' + ind + '.jpg" alt="" />';
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
	var ajaxTar = 'flower_lessons/lesson' + lessonNumber + '/flower_lesson_' + currentPage + ".html";
	
	$('#map_info').fadeOut(function(){ // fading out 
    $(this).hide();
    console.log(ajaxTar);
		$("#course_lessons").load(ajaxTar);
	});
}

function openLesson(lessonNum, pageNum) {
	var pages = lesson.individualLessons[lessonNum];
	console.log("PAGES! ",pages);
	currentPage = pageNum;
	goToPage();
}