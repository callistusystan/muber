/**
 * Created by Callistus Tan on 1/12/2017.
 */

const Driver = require('../models/driver');

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there' });
    },

    index(req, res, next) {
        const { lng, lat } = req.query;

        // geoNear expects GeoJSON, options as params
        Driver.geoNear(
            { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
            { spherical: true, maxDistance: 200000 }
        )
            .then(drivers => {
                res.send(drivers)
            })
            .catch(next);
    },

    create(req, res, next) {
        const driverProps = req.body;

        Driver.create(driverProps)
            .then(driver => res.send(driver))
            .catch(next);
    },

    edit(req, res, next) {
        const driverID = req.params.id;
        const driverProps = req.body;

        // findByIdAndUpdate does not return the driver
        // that is why we need to use findById to get the driver
        Driver.findByIdAndUpdate({ _id: driverID }, driverProps)
            .then((driver) => Driver.findById({ _id: driverID }))
            .then(driver => res.send(driver))
            .catch(next);
    },

    delete(req, res, next) {
        const driverID = req.params.id;

        Driver.findByIdAndRemove({ _id: driverID })
            .then((driver) => res.status(204).send(driver))
            .catch(next);
    }
};