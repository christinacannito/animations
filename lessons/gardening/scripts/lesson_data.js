// This is the file that is going to poplulate the course map.
// Evey thumbnail and info on that page

lesson = {};
lesson.title = 'Gardening';
lesson.identifier = 'FunGardening';
lesson.individualLessons = [{
	title: 'Intro Gardening.', // first lesson will have two slides
	time: '2:00',
	slides: [
		{
			// Page 0
			title: "Let's get started!",
			audio: '01_00_030' 
		}, {
			// Page 1
			title: "A step into the garden",
			audio: '01_00_030'
		}],
	thumbnails: 2
	}, {
		title: 'More in depth look at tools.', // 2nd lesson 
		time: '20:00',
		slides: [
			{
				// Page 0 
				title: 'Tools 101',
				audio: '01_00_030'
			}, {
				// Page 1 
				title: 'Tools next step',
				audio: '01_00_030'
			}],
		thumbnails: 2
		}, {
			title: 'Get the tools you need.',
			time: '25:00',
			slides: [
				{
					// Page 0 
					title: "Buying only what you need",
					audio: '01_00_030'
				}],
			thumbnails: 1	
		}];

