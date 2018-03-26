import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
});

export default Route.extend({
	
	model(){
		var theWineSong = Song.create({
			title: 'The Wine Song',
			band: 'The cat empire',
			rating: 5
		});

		var stillYoung = Song.create({
			title: 'Still Young',
			band: 'The cat empire',
			rating: 4
		});

		var mardyBum = Song.create({
			title: 'Mardy Bum',
			band: 'Artic Monkeys',
			rating: 4
		});

		var mercy = Song.create({
			title: 'Mercy',
			band: 'Muse',
			rating: 3
		});

		return [theWineSong, stillYoung, mardyBum, mercy]
	}


});
