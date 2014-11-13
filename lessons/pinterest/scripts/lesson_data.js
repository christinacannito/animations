// This is the file that is going to poplulate the course map.
// Evey thumbnail and info on that page

lesson = {};
lesson.title = 'Pinterest';
lesson.identifier = 'FunPinteresting';
lesson.individualLessons = [{
	title: 'Eye Candy', // first lesson will have two slides
	description: 'Lots of color and cool shapes all made with flowers!',
	time: '2:00',
	slides: [
		{
			// Page 0
			title: "Cool Finds",
			audio: '01_00_030' 
		}, {
			// Page 1
			title: "Working from inspirations",
			audio: '01_00_030'
		}],
	thumbnails: 2
	}, {
		title: 'Fun with plants', // 2nd lesson 
		description: 'Reuse materials to make new homes for plants.',
		time: '20:00',
		slides: [
			{
				// Page 0 
				title: 'Closer look at plants',
				audio: '01_00_030'
			}, {
				// Page 1 
				title: 'Making plants into art',
				audio: '01_00_030'
			}],
		thumbnails: 2
		}, {
			title: 'Giant creative creations', // 3rd lesson
			description: 'Make giant creations with these as your inspirations',
			time: '25:00',
			slides: [
				{
					// Page 0 
					title: "Make it BIG",
					audio: '01_00_030'
				}],
			thumbnails: 1	
		}];

