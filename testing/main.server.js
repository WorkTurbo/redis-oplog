import { Collections } from './boot';

import '../lib/utils/testing';
import '../lib/cache/testing';
import '../lib/processors/testing';
import '../lib/redis/testing';
import './collection_hooks.server';

// import './mutation_callbacks'
import './initial_add';
import { _ } from 'meteor/underscore';

_.each(Collections, (Collection) => {
    Collection.remove({});

    Collection.insert({
        title: 'A',
        score: 20,
        game: 'chess'
    });

    Collection.insert({
        title: 'B',
        score: 30,
        game: 'chess'
    });

    Collection.insert({
        title: 'C',
        score: 10,
        game: 'domino'
    });

    Collection.insert({
        title: 'D',
        score: 40,
        game: 'chess'
    });
});
