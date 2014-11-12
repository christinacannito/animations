$(document).ready(function() {
	$('#course_map').load('inspiration_lessons/course_map/inspiration_map.html', function(response, status){
		console.log(response);

		$('#home_garden').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('inspiration_lessons/lesson1/inspiration_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#transform_walkways').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('inspiration_lessons/lesson2/inspiration_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#cozy_corners').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('inspiration_lessons/lesson3/inspiration_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

	});
});