$(document).ready(function() {
	$('#course_map').load('gardening_lessons/course_map/gardening_map.html', function(response, status){
		console.log(response);
	});
});