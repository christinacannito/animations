$(document).ready(function() {
	// $('#course_map').load('gardening_lessons/course_map/gardening_map.html', function(response, status){
	// 	console.log(response);
	
		$('#intro').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('gardening_lessons/lesson1/garden_lesson_1.html', function(response, status){
				console.log(response);
			});
		});

		$('#indepth_tools').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('gardening_lessons/lesson2/garden_lesson_1.html', function(response, status){
				console.log(response);
			});
		})

		$('#tools_you_need').click(function(){
			$('#course_map').remove();
			$('#course_lessons').load('gardening_lessons/lesson3/garden_lesson_1.html', function(response, status){
				console.log(response);
			});
		})
	});
// });