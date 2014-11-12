$(document).ready(function() {
	$('#course_map').load('pinterest_lessons/course_map/pinterest_map.html', function(response, status){
		console.log(response);

		$('#eye_candy').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('pinterest_lessons/lesson1/pinterest_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#fun_with_plants').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('pinterest_lessons/lesson2/pinterest_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#giant_creative_creations').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('pinterest_lessons/lesson3/pinterest_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

	});
});