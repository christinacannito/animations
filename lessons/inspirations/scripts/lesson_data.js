// This is the file that is going to poplulate the course map.
// Evey thumbnail and info on that page

lesson = {};
lesson.title = 'Inspirations';
lesson.identifier = 'AwesomeInspirations';
lesson.individualLessons = [{
	title: 'The bold and beautiful', // first lesson will have two slides
	description: 'Getting inspired by what is around you',
	time: '2:00',
	slides: [
		{
			// Page 0
			title: "First thing first",
			audio: '01_00_030' 
		}, {
			// Page 1
			title: "A few of my own favorites",
			audio: '01_00_030'
		}],
	thumbnails: 2
	}, {
		title: 'How to start creating something of your own', // 2nd lesson 
		description: 'Starting with a few things',
		time: '20:00',
		slides: [
			{
				// Page 0 
				title: 'What you will need',
				audio: '01_00_030'
			}, {
				// Page 1 
				title: 'Putting it all together',
				audio: '01_00_030'
			}],
		thumbnails: 2
		}, {
			title: 'What to do when something goes wrong', // 3rd lesson
			description: 'Fixing things',
			time: '25:00',
			slides: [
				{
					// Page 0 
					title: "Finishing everything up",
					audio: '01_00_030'
				}],
			thumbnails: 1	
		}];

