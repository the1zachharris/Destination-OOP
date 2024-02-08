const Airport = require('../../classes/Airport.js')

describe('Airport', () => {
    let airport

    beforeEach(() => {
        airport = new Airport('Test Airport', 'TST')
    })

    it('should initialize with an empty array of planes', () => {
        expect(airport.getPlanes()).toEqual([])
    })

    it('should add a plane to the airport', () => {
        const plane = { id: 1, name: 'Test Plane' }
        airport.addPlane(plane)
        expect(airport.getPlanes()).toContain(plane)
    })
})
