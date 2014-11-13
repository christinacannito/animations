// This is the file that is going to poplulate the course map.
// Evey thumbnail and info on that page

lesson = {};
lesson.title = 'Advice from Marth';
lesson.identifier = 'FunMartha';
lesson.individualLessons = [{
	title: 'Martha\'s basics', // first lesson will have two slides
	description: 'What every beginner needs to know.',
	time: '2:00',
	slides: [
		{
			// Page 0
			title: "In the beginning...",
			audio: '01_00_030' 
		}, {
			// Page 1
			title: "Then there was this.",
			audio: '01_00_030'
		}],
	thumbnails: 2
	}, {
		title: 'Tips from Martha talks', // 2nd lesson 
		description: 'Hear the advice she has given at some of her most popular talks',
		time: '20:00',
		slides: [
			{
				// Page 0 
				title: 'The talk from Home Depot',
				audio: '01_00_030'
			}, {
				// Page 1 
				title: 'Talk on gettting creative',
				audio: '01_00_030'
			}],
		thumbnails: 2
		}, {
			title: 'Classic Martha', // 3rd lesson
			description: 'Classic tips from Martha\'s early career',
			time: '25:00',
			slides: [
				{
					// Page 0 
					title: "When she first started...",
					audio: '01_00_030'
				}],
			thumbnails: 1	
		}];

