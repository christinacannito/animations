$(document).ready(function() {
	$('#course_map').load('pinterest_lessons/course_map/pinterest_map.html', function(response, status){
		console.log(response);
	});
});