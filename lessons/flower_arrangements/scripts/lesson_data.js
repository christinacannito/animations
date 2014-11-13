// This is the file that is going to poplulate the course map.
// Evey thumbnail and info on that page

lesson = {};
lesson.title = 'Flower Arrangements';
lesson.identifier = 'FunArrangements';
lesson.individualLessons = [{
	title: 'Arrangements 101', // first lesson will have two slides
	description: 'Start with basic color schemes',
	time: '2:00',
	slides: [
		{
			// Page 0
			title: "Arrangement Basics",
			audio: '01_00_030' 
		}, {
			// Page 1
			title: "Step by step",
			audio: '01_00_030'
		}],
	thumbnails: 2
	}, {
		title: 'Arrangements using bright colors', // 2nd lesson 
		description: 'Make arrangements using bright colors based on surroundings.',
		time: '20:00',
		slides: [
			{
				// Page 0 
				title: 'Looking at color schemes',
				audio: '01_00_030'
			}, {
				// Page 1 
				title: 'Picking similar colors',
				audio: '01_00_030'
			}],
		thumbnails: 2
		}, {
			title: 'Monochromatic color schemes', // 3rd lesson
			description: 'Arrange flowers with a single color scheme',
			time: '25:00',
			slides: [
				{
					// Page 0 
					title: "Picking out that one color",
					audio: '01_00_030'
				}],
			thumbnails: 1	
		}];

