import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
	model(){
		var theWineSong = EmberObject.create({
			title: 'The Wine Song',
			band: 'The cat empire',
			rating: 5
		});

		var stillYoung = EmberObject.create({
			title: 'Still Young',
			band: 'The cat empire',
			rating: 4
		});

		var mardyBum = EmberObject.create({
			title: 'Mardy Bum',
			band: 'Artic Monkeys',
			rating: 4
		});

		var mercy = EmberObject.create({
			title: 'Mercy',
			band: 'Muse',
			rating: 3
		});

		return [theWineSong, stillYoung, mardyBum, mercy]
	}
});
