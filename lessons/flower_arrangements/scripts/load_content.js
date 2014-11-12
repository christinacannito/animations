$(document).ready(function() {
	$('#course_map').load('flower_lessons/course_map/flower_map.html', function(response, status){
		console.log(response);
	});
});