$(document).ready(function() {
	$('#course_map').load('flower_lessons/course_map/flower_map.html', function(response, status){
		console.log(response);

		$('#arrangements_101').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('flower_lessons/lesson1/flower_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#arrangements_bright').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('flower_lessons/lesson2/flower_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#mono_color_schemes').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('flower_lessons/lesson3/flower_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

	});
});