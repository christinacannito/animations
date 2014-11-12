$(document).ready(function() {
	$('#course_map').load('inspiration_lessons/course_map/inspiration_map.html', function(response, status){
		console.log(response);
	});
});