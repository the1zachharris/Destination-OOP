const Plane = require('../../classes/Plane');

describe('Plane Tests', () => {
    const newPlane = new Plane("United", "EWR", "ATL");

    test('company, origin, and destination are strings', () => {
        const parameters = [newPlane.company, newPlane.origin, newPlane.destination];
        parameters.forEach(parameter => {
            expect(typeof parameter).toBe('string');
        })
    });
    test('getPassengers returns the array of passengers', () => {
        expect(newPlane.getPassengers()).toEqual([]);
    });
    test('addPasenger adds person to the passengers array', () => {
        newPlane.addPassenger("Dominic");
        expect(newPlane.getPassengers()).toEqual(["Dominic"]);
    });
});