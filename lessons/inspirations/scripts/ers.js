function doStart(){
	$.getScript("scripts/lesson_data.js", function(script, textStatus, jqXHR){
		// create the course map here with info from lesson_data
		var tiles = '';
		var less = lesson.individualLessons;
		for (var ind in less) {
			console.log(ind); // index numbers (images should go from 0 and up)
			tiles += '<div class="col-sm-4" id="' + ind + '">';
			tiles += '<div class="thumbnail">';
			tiles += '<img src="../../img/inspirations/inspiration_' + ind + '.jpg" alt="" />';
			tiles += '<div class="caption">';
			tiles += '<h3>' + less[ind].title + '</h3>';
			tiles += '<p>' + less[ind].description + '</p>';
			tiles += '<p><a href="#" class="btn btn-primary" role="button"><i class="fa fa-volume-up fa-2x"></i></a></p>';
			tiles += '</div>';
			tiles += '</div>';
			tiles += '</div>';
		}
		$('#map_info').append(tiles);
	});
}