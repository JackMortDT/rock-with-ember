import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Band = EmberObject.extend({
	name: '',
});

export default Route.extend({

	model(){
		var theCatEmpire = Band.create({ name: 'The Cat Empire' });
		var arcticMonkeys = Band.create({ name: 'Artic Monkeys'});
		var muse = Band.create({ name: 'Muse'});

		return [theCatEmpire, arcticMonkeys, muse];
	}

});
