$(document).ready(function() {
	$('#course_map').load('martha_lessons/course_map/martha_map.html', function(response, status){
		console.log(response);

		$('#martha_basic').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('martha_lessons/lesson1/martha_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#martha_talks').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('martha_lessons/lesson2/martha_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#classic_martha').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('martha_lessons/lesson3/martha_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

	});
});