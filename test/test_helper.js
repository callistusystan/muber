/**
 * Created by Callistus Tan on 1/12/2017.
 */

const mongoose = require('mongoose');

before(done => {
    mongoose.createConnection('mongodb://localhost/muber_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning', error)
        });
});

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
        .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
        .then(() => done())
        .catch(() => done());
})